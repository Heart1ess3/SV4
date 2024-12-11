const express = require('express');
const fs = require('fs');
const path = require('path');
const { js2xml } = require('xml-js');
const { downloadStatistics } = require('./script');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const flightsFilePath = path.join(__dirname, 'flights.json');
const statisticsFilePath = path.join(__dirname, 'statistics.json');

const readData = (filePath) => {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData);
};

const writeData = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.get('/flights', (req, res) => {
    const flights = readData(flightsFilePath);
    res.json(flights);
});

app.get('/api/flights/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const flights = readData(flightsFilePath);
    const flight = flights.find(v => v.id === id);

    if (flight) {
        res.json(flight);
    } else {
        res.status(404).json({ message: `Вариант с id ${id} не найден.` });
    }
});

app.get('/stat', (req, res) => {
    const statistics = readData(statisticsFilePath);
    res.json(statistics); 
});

app.post('/vote', (req, res) => {
    const { flightId } = req.body;
    const statistics = readData(statisticsFilePath);
    const statistic = statistics.find(s => s.id === flightId);

    if (!flightId) {
        return res.status(400).json({ message: 'Пожалуйста, выберите вариант для голосования.' });
    }

    if (statistic) {
        statistic.votes += 1;
        writeData(statisticsFilePath, statistics);
        res.json({ message: 'Ваш голос принят!', statistic });
    } else {
        res.status(404).json({ message: 'Вариант не найден.' });
    }
});

app.post('/api/create-flight', (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ message: 'Необходимо указать название и цену полета.' });
    }

    const flights = readData(flightsFilePath);
    const newflight = { id: flights.length + 1, name, price: parseFloat(price) };
    flights.push(newflight);
    writeData(flightsFilePath, flights);

    const statistics = readData(statisticsFilePath);
    statistics.push({ id: newflight.id, votes: 0 });
    writeData(statisticsFilePath, statistics);

    res.json({ message: 'Вариант добавлен', flight: newflight });
});

app.delete('/api/flights/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let flights = readData(flightsFilePath);
    flights = flights.filter(v => v.id !== id);
    writeData(flightsFilePath, flights);

    let statistics = readData(statisticsFilePath);
    statistics = statistics.filter(s => s.id !== id);
    writeData(statisticsFilePath, statistics);

    res.json({ message: `Вариант с id ${id} удален.` });
});

app.get('/download/statistics', (req, res) => {
    const statistics = readData(statisticsFilePath);
    const acceptHeader = req.headers.accept;

    if (acceptHeader.includes('application/json')) {
        res.setHeader('Content-Disposition', 'attachment; filename=statistics.json');
        return res.json(statistics);
    } else if (acceptHeader.includes('application/xml')) {
        const xmlData = js2xml({ statistics: statistics.map(s => ({ variant: { id: s.id, votes: s.votes } })) }, { compact: true });
        res.setHeader('Content-Disposition', 'attachment; filename=statistics.xml');
        res.type('xml').send(xmlData);
    } else {
        const htmlData = generateHTML(statistics);
        res.setHeader('Content-Disposition', 'attachment; filename=statistics.html');
        res.type('html').send(htmlData);
    }
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Голосование</title>
            <script>
                async function loadflights() {
                    const response = await fetch('/flights');
                    const flights = await response.json();
                    const form = document.getElementById('vote-form');
                    flights.forEach(flight => {
                        const div = document.createElement('div');
                        const input = document.createElement('input');
                        input.type = 'radio';
                        input.id = \`flight\${flight.id}\`;
                        input.name = 'flight';
                        input.value = flight.id;
                        const label = document.createElement('label');
                        label.htmlFor = \`flight\${flight.id}\`;
                        label.innerText = flight.name + ' (' + flight.price + ')';
                        
                        const deleteButton = document.createElement('button');
                        deleteButton.innerText = 'Удалить';
                        deleteButton.onclick = () => deleteFlight(flight.id);

                        div.appendChild(input);
                        div.appendChild(label);
                        div.appendChild(deleteButton);
                        form.appendChild(div);
                    });
                }

                async function deleteFlight(id) {
                    const response = await fetch(\`/api/flights/\${id}\`, {
                        method: 'DELETE',
                    });

                    const result = await response.json();
                    alert(result.message);
                    loadflights(); // Обновляем список рейсов
                    updateStatistics(); // Обновляем статистику
                }

                async function addFlight() {
                    const name = 'Название полета'; // Замените на реальное значение
                    const price = 100; // Замените на реальное значение

                    const response = await fetch('/api/create-flight', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name, price })
                    });

                    const result = await response.json();
                    console.log(result);
                }

                async function vote(event) {
                    event.preventDefault();
                    const selectedflight = document.querySelector('input[name="flight"]:checked');
                    if (!selectedflight) {
                        alert('Пожалуйста, выберите вариант для голосования.');
                        return;
                    }

                    const response = await fetch('/vote', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ flightId: parseInt(selectedflight.value) })
                    });
                    const result = await response.json();
                    alert(result.message);
                    selectedflight.checked = false; // Очищаем выбор
                    updateStatistics();
                }

                async function updateStatistics() {
                    const response = await fetch('/stat');
                    const statistics = await response.json();
                    const statsDiv = document.getElementById('statistics');
                    statsDiv.innerHTML = '<h2>Статистика голосования:</h2><ul>' + statistics.map(s => \`<li>Вариант \${s.id}: \${s.votes} голосов</li>\`).join('') + '</ul>';
                }

                async function downloadStatistics(format) {
                    const response = await fetch('/download/statistics', {
                        method: 'GET',
                        headers: {
                            'Accept': format === 'json' ? 'application/json' : 'application/xml'
                        }
                    });

                    if (!response.ok) {
                        alert('Ошибка при загрузке статистики: ' + response.statusText);
                        return;
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = \`statistics.\${format}\`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                }

                window.onload = () => {
                    loadflights();
                    updateStatistics();
                };
            </script>
        </head>
        <body>
            <h1>Голосование: куда выгоднее слетать</h1>
            <form id="vote-form" onsubmit="vote(event)">
                <h2>Выберите:</h2>
                <button type="submit">Голосовать</button>
            </form>
            <div id="statistics"></div>
            <h2>Скачать результаты голосования:</h2>
            <button onclick="downloadStatistics('json')" style="margin-bottom: 10px">Результаты в формате JSON</button><br>
            <button onclick="downloadStatistics('xml')" style="margin-bottom: 10px">Результаты в формате XML</button><br>
            <button onclick="downloadStatistics('html')" style="margin-bottom: 10px">Результаты в формате HTML</button>
        </body>
        </html>
    `);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
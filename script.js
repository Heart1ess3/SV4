async function downloadStatistics(format) {
    try {
        const response = await fetch('/download/statistics', {
            method: 'GET',
            headers: {
                'Accept': format === 'json' ? 'application/json' : format === 'xml' ? 'application/xml' : 'text/html',
            },
        });

        if (!response.ok) {
            alert(`Ошибка при загрузке статистики: ${response.status} ${response.statusText}`);
            return;
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `statistics.${format}`; 
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Ошибка при загрузке:', error);
        alert(`Произошла ошибка: ${error.message}`);
    }
}

module.exports = { downloadStatistics };
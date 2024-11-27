import { BrowserRouter } from "react-router-dom/dist"
import AppRouter from "./routers/appRouter"

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App

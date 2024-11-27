import { Route, Routes } from "react-router-dom"
import { privateRoutes } from "./routesList"
import Header from "../components/header"
import Footer from "../components/footer"

const AppRouter = () => {
  const routes = privateRoutes.map(route =>
    <Route key={route.title}
        path={route.path}
        element={route.element}
    />
)

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>{routes}</Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppRouter;
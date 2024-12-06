import { Route, Routes } from "react-router-dom"
import AppOutlet from "./AppOutlet"
import Products from "../pages/Products"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<AppOutlet />}>
            <Route path='/products' element={<Products/>} />
        </Route>

        <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default AppRouter
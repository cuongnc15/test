import { Route, Routes } from "react-router-dom"
import Login from "../login/Login"
import Footer from "../footer/Footer"

const Router = () => {
    return (
        <>
         <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </>
    )
}

export default Router
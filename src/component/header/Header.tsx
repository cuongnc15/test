import { NavLink, Route, Routes } from "react-router-dom"
import Login from "../login/Login"
import Footer from "../footer/Footer"

const Header = () => {
    return (
        <>
        <NavLink to="/login">
                  Login
        </NavLink>
        </>
    )
}

export default Header
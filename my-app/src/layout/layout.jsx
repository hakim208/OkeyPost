import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../pages/header"
import Footer from "../pages/footer"
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

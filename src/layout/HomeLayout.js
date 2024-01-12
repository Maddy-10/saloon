import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <>
            <Outlet />
            <footer>Footer Navbar</footer>
        </>
    )
}

export default HomeLayout
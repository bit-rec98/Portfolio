import { useState } from "react"
import NavItemIndex from "./navbar/NavItemIndex"
import NavItems from "./navbar/NavItems"

const urlAddress = location.href

const Navbar = () => {

    const [address, setAddress] = useState(urlAddress)

    return (
        <header>
            <nav id="navbar">
                {address.includes('/home') || address.includes('/about') || address.includes('/projects') || address.includes('/github') ? <NavItems/> : <NavItemIndex/>}
            </nav>
        </header>
    )
}

export default Navbar


//! Solve dynamic rendering for navbars with/without links
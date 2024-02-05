// import NavItemIndex from "./navbar/NavItemIndex" ----> Solve dynamic rendering
import NavItems from "./navbar/NavItems"

const Navbar = () => {

    return (
        <header>
            <nav id="navbar">
                {/* {address.includes('/home') || address.includes('/about') || address.includes('/projects') || address.includes('/github') ? <NavItems/> : <NavItemIndex/>} */}
                <NavItems></NavItems>
            </nav>
        </header>
    )
}

export default Navbar


//! Solve dynamic rendering for navbars with/without links
import NavItems from "./navbar/NavItems"
// import NavItemIndex from "./navbar/NavItemIndex"
// import { useContext } from "react"
// import NavBarContext from "../contexts/NavBarContext"
import '../css/navbar.css'

const Navbar = () => {

    // const {index} = useContext(NavBarContext)

    return (
        <header>
            <nav id="navbar">
                <NavItems/>
            </nav>
        </header>
    )
}

export default Navbar


//! Solve dynamic rendering for navbars with/without links
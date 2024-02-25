import { createContext, useState } from "react";

const NavBarContext = createContext();


const path = location.href;

const NavBarProvider = ({children}) => {
    
    const [index, setIndex] = useState(true);
    
    const handleNavRendering = () => {
        if(path.includes('/home') || path.includes('/about') || path.includes('/projects') || path.includes('/home') || path.includes('/github')){
            setIndex(false);
        } else {
            setIndex(true);
        }
    };

    const data = {index, handleNavRendering};

    return <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
}

export { NavBarProvider };
export default NavBarContext;
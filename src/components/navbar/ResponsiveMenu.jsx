import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = (anchor, toggleDrawer, darkMode, spanishLanguage) => {

    const links = [
        <NavLink
            key={1}
            className={darkMode ? "darkMode navbar-item" : "navbar-item"}
            to="/"
        >
            {spanishLanguage ? "Iniciar" : "Get started"}
        </NavLink>,
        <NavLink
            key={2}
            className={darkMode ? "darkMode navbar-item" : "navbar-item"}
            to="/home"
        >
            {spanishLanguage ? "Menú" : "Home"}
        </NavLink>,
        <NavLink
            key={3}
            className={darkMode ? "darkMode navbar-item" : "navbar-item"}
            to="/about"
        >
            {spanishLanguage ? "Acerca de mí" : "About me"}
        </NavLink>,
        <NavLink
            key={4}
            className={darkMode ? "darkMode navbar-item" : "navbar-item"}
            to="/projects"
        >
            {spanishLanguage ? "Proyectos" : "Projects"}
        </NavLink>
    ];

return (
    <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270, backgroundColor: darkMode ? "#121212" : "#f5f5f5", height: "100vh" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {links.map((text, index) => (
                <div key={index}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    </Box>
    );
};

export default ResponsiveMenu;

import React from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ResponsiveMenu from "./ResponsiveMenu";
import { SlMenu } from "react-icons/sl";

const TriggerResponsiveMenu = ({darkMode, spanishLanguage}) => {

    const [state, setState] = React.useState({
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

  return (
    <div id="navLateral-menu">
        {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><SlMenu size={"1.5rem"} color={darkMode ? "#f5f5f5" : "#121212"} /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {ResponsiveMenu(anchor, toggleDrawer, darkMode, spanishLanguage)}
                </Drawer>
            </React.Fragment>
        ))}
    </div>
  )
}

export default TriggerResponsiveMenu
import { VscDebugStart } from "react-icons/vsc";
import "../css/index.css";

import { NavLink } from "react-router-dom";

const Index = ({ darkMode }) => {
  return (
    <section id="index-layout">
      <NavLink
        className={darkMode ? "darkMode" : ""}
        to="/home"
        id="start-navigation"
      >
        <VscDebugStart size={"5rem"} />
      </NavLink>
    </section>
  );
};

export default Index;

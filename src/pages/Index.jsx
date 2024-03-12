import '../css/index.css'

import { NavLink } from "react-router-dom"

const Index = ({darkMode, spanishLanguage}) => {
  return (
    <section id="index-layout">
      <NavLink className={darkMode ? "darkMode" : ""} to='/home' id="start-navigation">Get started</NavLink>
    </section>
  )
}

export default Index
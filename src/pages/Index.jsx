import '../css/index.css'

import { NavLink } from "react-router-dom"

const Index = () => {
  return (
    <section id="index-layout">
      <NavLink to='/home' id="start-navigation">Get started</NavLink>
    </section>
  )
}

export default Index
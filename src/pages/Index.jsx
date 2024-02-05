import { NavLink } from "react-router-dom"

const Index = () => {
  return (
    <section id="index-layout">
      <NavLink to='/home' id="start-navigation">Get started</NavLink>  
      
      {/* Position: absolute podría servir para formar capas de polígonos */}
      <div className="polygon-a"></div> 
      <div className="polygon-b"></div> 
      <div className="polygon-c"></div> 
    </section>
  )
}

export default Index
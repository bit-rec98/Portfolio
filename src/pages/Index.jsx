import PolygonA from '../components/polygons/PolygonA'
import PolygonB from '../components/polygons/PolygonB'
import PolygonC from '../components/polygons/PolygonC'
import '../css/index.css'
import { NavLink } from "react-router-dom"

const Index = () => {
  return (
    <section id="index-layout">
      <NavLink to='/home' id="start-navigation">Get started</NavLink>
      <PolygonA/>
      <PolygonB/>
      <PolygonC/>
    </section>
  )
}

export default Index
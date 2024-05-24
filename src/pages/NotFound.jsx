import '../css/notFound.css'
import { Link } from "react-router-dom"

const NotFound = ({darkMode, spanishLanguage}) => {
  return (
    <section id="notFound-page" className={darkMode ? "darkMode" : ""}>
      <h1>Error 404</h1>
      <h2>
        {spanishLanguage ? "El recurso que estabas buscando parece que no existe." : "The resource you are looking for has not been found."}
      </h2>
      <div>
        <p>
          {spanishLanguage ? "Sin embargo, podés seguir explorando mi portafolio al clickear abajo:" : "However, you can still explore my portfolio by clicking below:"}
        </p>
        <Link id='back-btn' to='/'>
          {spanishLanguage ? "Volver" : "Go back"}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
import '../css/notFound.css'
import { Link } from "react-router-dom"

const NotFound = ({darkMode, spanishLanguage}) => {
  return (
    <section id="notFound-page" className={darkMode ? "darkMode" : ""}>
      <h1>Error 404</h1>
      <h2>The resource you are looking for has not been found</h2>
      <div>
        <p>However, you can still explore my portfolio by clicking below: </p>
        <Link id='back-btn' to='/'>
          Go back
        </Link>
      </div>
    </section>
  )
}

export default NotFound
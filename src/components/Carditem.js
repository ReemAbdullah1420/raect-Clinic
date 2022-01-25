import styles from "./Carditem.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ClinicContext from "../utils/ClinicContext"
function Carditem() {
  const { sections } = useContext(ClinicContext)
  console.log(sections)
  return (
    <>
          <div className={styles.wrapper}>
          <h1>Parallax Flipping Cards</h1>
          <hr />
      {sections?.map(section => (
          <div className={styles.cols}>
            <div className={styles.col} ontouchstart="this.classList.toggle('hover');">
              <div className={styles.container}>
                <Link to={`/${section._id}`}>
                  <div className={styles.front} style={{ backgroundImage: ` url("${section.image}")` }}>
                    <div className={styles.inner}>
                      <p>{section.name}</p>
                      {/* <span>Lorem ipsum</span> */}
                    </div>
                  </div>
                <div className={styles.back}>
                  <div className={styles.inner}>
                    <p>{section.description}</p>
                    <button>HERE</button>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  )
}

export default Carditem

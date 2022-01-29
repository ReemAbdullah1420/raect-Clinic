import styles from "./Carditem.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ClinicContext from "../utils/ClinicContext"
function Carditem() {
  const { sections } = useContext(ClinicContext)
  console.log(sections)
  return (
    <>
      <section className={styles.ourservices}>
        <hr />
        <div className={styles.contener}>
          {sections?.map(section => (
            <>
              <Link to={`/${section._id}`}>
                <img src={section.image} className={styles.img} />
                <p className={styles.inner}>{section.name}</p>
              </Link>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default Carditem

import VanillaTilt from "vanilla-tilt"
import NavbarItem from "../components/NavbarItem"
import styles from "./Register.module.css"
import image1 from "../assets/10.png"
import image2 from "../assets/9.png"
import image3 from "../assets/11.png"
import { Link } from "react-router-dom"
function Register() {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  })
  return (
    <>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src={image1} />
          <div className={styles.content}>
            <Link to="/about"> REGISTER COMPANY</Link>
          </div>
        </div>
        <div className={styles.card}>
          <img src={image2} />
          <div className={styles.content}>
            <Link to="/about">REGISTER DOCTOR</Link>
          </div>
        </div>
        <div className={styles.card}>
          <img src={image3} />
          <div className={styles.content}>
            <Link to="/about">REGISTER USER</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

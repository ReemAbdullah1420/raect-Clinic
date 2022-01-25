import styles from "./navbar.module.css"
import imageee from "../assets/7.png"
import { Link } from "react-router-dom"
function NavbarItem() {
  return (
    <nav className={styles.stroke}>
      <ul>
        <li
          style={{
            backgroundImage: ` url("${imageee}")`,
            backgroundSize: "cover",
            left: "40px",
            top: "30px",
            position: "absolute",
            width: "80px",
            height: "80px",
            zindex: "-1",
          }}
        ></li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>

        <li>
          <Link to="/register">REGISTER</Link>
        </li>

        <li>
          <Link to="/profile">My PROFILE </Link>
        </li>
        <li>
          <Link to="/section">Sections</Link>
        </li>
        <li>
          <Link to="/healthtools">HEALTH TOOLS</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarItem

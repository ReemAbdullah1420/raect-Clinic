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
        {/* <li>
          <div className="dropdown">
            <button className="dropbtn">
              <div to="/book-now">HEALTH PROGRAMS</div>
            </button>
            <div className="dropdown-content">
              <Link to="/book-now">HEALTH PROGRAMS</Link>
              <Link to="/book-now">HEALTH PROGRAMS</Link>
            </div>
          </div>
        </li> */}
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/covid-19">COVID-19</Link>
        </li>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarItem

import styles from "./navbar.module.css"
import imageee from "../assets/7.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ClinicContext from "../utils/ClinicContext"
function NavbarItem() {
  const { logout } = useContext(ClinicContext)

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
        </li>{" "}
        {localStorage.tokenDoctor ? (
          <>
            <li>
              <Link to="/doctors">patients</Link>
            </li>
            <li>
              <Link to="/profileDoctor">My PROFILE </Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                log out
              </Link>
            </li>
          </>
        ) : null}
        {localStorage.tokenUser ?
         (
          <>
            {" "}
            <li>
              <Link to="/healthtools">HEALTH TOOLS</Link>
            </li>{" "}
            <li>
              <Link to="/section">Doctors & Specialties</Link>
            </li>{" "}
            <li>
              <Link to="/profile">My PROFILE </Link>
            </li>{" "}
            <li>
              <Link to="/" onClick={logout}>
                log out
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default NavbarItem

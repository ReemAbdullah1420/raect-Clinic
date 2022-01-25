import { useContext } from "react"
import { Link } from "react-router-dom"
import ClinicContext from "../utils/ClinicContext"
import styles from "./Login.module.css"

function Login() {
  const { loginUser, loginDoctor } = useContext(ClinicContext)
  return (
    <>
      <div className={styles.SignupForm}>
        <form action="" method="POST" id="login" className={styles.animate} onSubmit={(loginUser, loginDoctor)}>
          <i title="REMEMBER" onclick="savedetails()" className={styles.fafasave}></i>
          <center>
            <h1>LOG IN </h1>

            <input type="email" name="email" placeholder="Email Address" required />
            <input type="password" name="password" placeholder="Password" required />

            <button className={styles.btn1} type="submit">
              log in
            </button>
          </center>
        </form>
      </div>
    </>
  )
}

export default Login

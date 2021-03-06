import { useContext } from "react"
import { Link } from "react-router-dom"
import ClinicContext from "../utils/ClinicContext"
import styles from "./SignUp.module.css"

function SignUp() {
  const { signupUser } = useContext(ClinicContext)

  return (
    <>
      <div className={styles.SignupForm}>
        <form action="" method="POST" id="login" className={styles.animate} onSubmit={signupUser}>
          <i title="REMEMBER" onclick="savedetails()" className={styles.fafasave}></i>
          <center>
            <h1>SIGN UP </h1>
            <input type="text" name="firstName" placeholder="firstName" required />
            <input type="text" name="lastName" placeholder="lastName" required />
            <input type="email" name="email" placeholder="Email Address*" required />
            <input type="password" name="password" placeholder="Password*" required />
            <input type="url" name="image" placeholder="image" required />

            <button className={styles.btn1} type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className={styles.btn1}>login</button>
            </Link>

            {/* <section>
              <span>
                <a href="#">Forgot Password?</a>
              </span>
              <span>
                <a >Don't have an account?</a>
              </span>
            </section> */}
          </center>
        </form>
      </div>
    </>
  )
}

export default SignUp

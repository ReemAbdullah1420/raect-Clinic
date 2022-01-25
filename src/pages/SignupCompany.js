import { useContext } from "react"
import { Link } from "react-router-dom"
import ClinicContext from "../utils/ClinicContext"
import styles from "./SignUp.module.css"

function SignUpCompany() {
  const { signupCompany } = useContext(ClinicContext)

  return (
    <>
      <div className={styles.SignupForm}>
        <form action="" method="POST" id="login" className={styles.animate} onSubmit={signupCompany}>
          <i title="REMEMBER" onclick="savedetails()" className={styles.fafasave}></i>
          <center>
            <h1>SIGN UP </h1>
            <input type="text" name="Name" placeholder="CompanyName" required />
            <input type="email" name="email" placeholder="Email Address*" required />
            <input type="password" name="password" placeholder="Password*" required />
            <button className={styles.btn1} type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className={styles.btn1}>login</button>
            </Link>
          </center>
        </form>
      </div>
    </>
  )
}

export default SignUpCompany

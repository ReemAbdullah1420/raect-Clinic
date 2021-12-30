import { useContext } from "react"
import NavbarItem from "../components/NavbarItem"
import ClinicContext from "../utils/ClinicContext"
import styles from "./SignUp.module.css"

function SignUp() {
  const { signup } = useContext(ClinicContext)
 
  return (
    <>
      
      <NavbarItem />
      <div className={styles.SignupForm}>
        <form action="" method="POST" id="login" className={styles.animate}>
          <i title="REMEMBER" onclick="savedetails()" className={styles.fafasave}></i>
          <center>
            <h1>SIGN IN</h1>
            <input type="email" id="email" name="email" placeholder="Email Address*" required />
            <input type="password" id="passcode" name="passcode" placeholder="Password*" required />
            <button className={styles.btn1} type="submit">
              SignIn
            </button>
            <section>
              <span>
                <a href="#">Forgot Password?</a>
              </span>
              <span>
                <a onclick="Signupform()">Don't have an account?</a>
              </span>
            </section>
          </center>
        </form>

        <form action="" method="POST" id="signup" className={styles.animate} hidden>
          <center>
            <h1>SIGN UP</h1>
            <input type="text" id="username" name="username" placeholder="Full name*" required />
            <input type="tel" id="mob" name="mob" placeholder="Contact no*" required />
            <input type="email" id="emailaddress" name="emailaddress" placeholder="Email Address*" required />
            <input type="text" id="password" name="password" placeholder="Password*" required />
            <input
              type="password"
              id="Cpassword"
              name="Cpassword"
              placeholder="Confirm Password*"
              onkeypress="Validate()"
              required
            />
            <input type="button" value="SignUp" className={styles.btn1} onclick="ValidateSubmission()" />
            <section>
              <span>
                <a onclick="Loginform()">Already Registered?</a>
              </span>
            </section>
          </center>
        </form>
      </div>
    
    </>
  )
}

export default SignUp

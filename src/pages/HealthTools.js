import { useState } from "react"
import styles from "./HealthTools.module.css"
function Health() {
  const [BMIs, setBMI] = useState("")
  const [Waters, setwater] = useState("")
  const [Protiens, setProtien] = useState("")
  const BMI = e => {
    e.preventDefault()
    const form = e.target
    const Heghit = form.elements.Height.value
    const weight = form.elements.Weight.value
    let result = (Heghit * Heghit) / weight

    setBMI(result.toFixed(2))
  }
  const Water = e => {
    e.preventDefault()
    const form = e.target
    const weight = form.elements.Weight.value
    let result = weight / 0.024

    setwater(result.toFixed(2))
  }
  const Protien = e => {
    e.preventDefault()
    const form = e.target
    const Heghit = form.elements.Height.value
    let result = 23 * Heghit ** 2
    setProtien(result.toFixed(2))
  }

  return (
    <>
      <section className={styles.ourservices}>
        <div className={styles.container}>
          <div className={styles.rowclearfix}>
            <div className={styles.singleserviceitem}>
              <div className={styles.serviceicon}>
                <img src="https://www.myclinic.com.sa/en/images/1065Image.jpg" alt="" />
              </div>
              <div className={styles.servicetext}>
                <h4>BMI Calculator</h4>
                <h5>BMI (Body Mass Index) = (Mass In KG) / (Height In Meters) ^ 2</h5>
                <p>Your Weight:</p>
                <form onSubmit={BMI}>
                  <input type="text" name="Weight" placeholder="Weight(Kg)" required />
                  <br />
                  <input type="text" name="Height" placeholder="Height(cm)" required />
                  <br />
                  <button type="submit">Click </button>
                </form>
                <div className={styles.result}>{BMIs}</div>
                <br />
              </div>
              <div className="BMI" id="BMI"></div>
            </div>
          </div>
          <div className={styles.rowclearfix}>
            <div className={styles.singleserviceitem}>
              <div className={styles.serviceicon}>
                <img src="https://www.myclinic.com.sa/en/images/1071Image.jpg" alt="" />
              </div>
              <div className={styles.servicetext}>
                <h4>Water Intake Calculator</h4>
                <h5>Water Intake (in ml) = (Mass in KG) / 0.024</h5>
                <form onSubmit={Water}>
                  <label>Your Weight:</label>
                  <input type="text" name="Weight" placeholder="Weight(Kg)" required />
                  <br />
                  <button type="submit">Click </button>
                </form>
                <div className={styles.result}>{Waters}</div>
                <br />
              </div>
            </div>
          </div>
          <div className={styles.rowclearfix}>
            <div className={styles.singleserviceitem}>
              <div className={styles.serviceicon}>
                <img src="https://www.myclinic.com.sa/en/images/1069Image.jpg" alt="" />
              </div>
              <div className={styles.servicetext}>
                <h4>Protien Intake Calculator</h4>
                <h5>Your Ideal Protien Intake (In Grams) Is Your Ideal Body Weight In Kilograms = 23 * (Height) ^ 2</h5>
                <form onSubmit={Protien}>
                  <label>Your Height:</label>
                  <input type="text" name="Height" placeholder="Height(cm)" required />
                  <br />
                  <button type="submit">Click </button>
                </form>
                <div className={styles.result}>{Protiens}</div>
              </div>
            </div>
          </div>
          {/* <div className={styles.rowclearfix}>
            <div className={styles.singleserviceitem}>
              <div className={styles.serviceicon}>
                <img src="https://www.myclinic.com.sa/en/images/1067Image.jpg" alt="" />
              </div>
              <div className={styles.servicetext}>
                <h4>Pregnancy Calculator</h4>
                <p>Pregnancy Calculator</p>
                <input type="date" name="Height" placeholder="Height(cm)" required />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Health

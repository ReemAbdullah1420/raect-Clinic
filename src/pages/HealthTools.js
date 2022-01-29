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
    let result = (weight / Heghit) * 2

    setBMI(result.toFixed(2))
  }

  const Water = e => {
    e.preventDefault()
    const form = e.target
    const weight = form.elements.Weight.value
    let result = weight * 40

    setwater(result.toFixed(2))
  }
  const Protien = e => {
    e.preventDefault()
    const form = e.target
    const weight = form.elements.Weight.value
    let result = weight * 2
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

                <form onSubmit={BMI}>
                  <label style={{ color: "black" }}>Your weight:</label>
                  <input type="number" name="Weight" placeholder="Weight(Kg)" required />
                  <br />
                  <label style={{ color: "black" }}>Your Height:</label>
                  <input type="number" name="Height" placeholder="Height(cm)" required />
                  <br />

                  <button
                    style={{ color: "#fff", margin: 20, backgroundColor: "#4e7ca7", borderRadius: 10 }}
                    type="submit"
                  >
                    Click{" "}
                  </button>
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
                <h5>The water you need to drink a day = (Mass in KG) *40ml </h5>
                <form onSubmit={Water}>
                  <label style={{ color: "black" }}>Your Weight:</label>
                  <input style={{ color: "black" }} type="number" name="Weight" placeholder="Weight(Kg)" required />
                  <br />
                  <button
                    style={{ color: "#fff", margin: 20, backgroundColor: "#4e7ca7", borderRadius: 10 }}
                    type="submit"
                  >
                    Click{" "}
                  </button>
                </form>
                <div className={styles.result}>{Waters}ml</div>
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
                <h5>Amount of protein in grams needed per day =weight*2</h5>
                <form onSubmit={Protien}>
                  <label style={{ color: "black" }}>Your Weight:</label>
                  <input style={{ color: "black" }} type="number" name="Weight" placeholder="Weight(cm)" required />
                  <br />
                  <button
                    type="submit"
                    style={{ color: "#fff", margin: 20, backgroundColor: "#4e7ca7", borderRadius: 10 }}
                  >
                    Click{" "}
                  </button>
                </form>
                <div className={styles.result}>{Protiens}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Health

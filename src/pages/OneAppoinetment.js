import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import AddAnlyzing from "../components/AddAnlyzing"
import AddAppo from "../components/AddAppo"
import AddBlood from "../components/AddBlood"
import AddMedicine from "../components/AddMedicine"
import AddMRN from "../components/AddMRN"
import AddRays from "../components/AddRays"
import AddVaccine from "../components/AddVaccine"
import ClinicContext from "../utils/ClinicContext"
import style from "./OneAppoientment.module.css"
import styles from "./Profile.module.css"
function OneAppoientment() {
  const { AppoientmentId } = useParams()
  const { Appointments } = useContext(ClinicContext)
  const Appointment = Appointments.find(Appointment => Appointment._id === AppoientmentId)
  const [showMRN, setShowMRN] = useState(false)
  const [showRays, setShowRays] = useState(false)
  const [showAppointment, setShowAppointment] = useState(false)
  const [showVaccine, setShowVaccine] = useState(false)
  const [showmedicinerecord, setShowmedicinerecord] = useState(false)
  const [showBlood, setShowBlood] = useState(false)
  const [showAnalyzing, setShowAnalyzing] = useState(false)

  return (
    <>
      <section className={style.ourservices}>
        <div className={styles.link}>
          <button onClick={() => setShowMRN(true)}>
            <h1 className={styles.h1}>MRN</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/1.png" height={100} width={100} />
          </button>
          <hr />
          <button onClick={() => setShowRays(true)}>
            <h1 className={styles.h1}>Rays</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/6.png" height={100} width={100} />
          </button>
          <hr />
          {/* <button onClick={() => setShowAppointment(true)}>
            <h1 className={styles.h1}>Appointment</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/3.png" height={100} width={100} />
          </button> */}
          <button onClick={() => setShowVaccine(true)}>
            <h1 className={styles.h1}>Vaccine</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/11.png" height={100} width={100} />
          </button>
          <hr />

          <button onClick={() => setShowmedicinerecord(true)}>
            <h1 className={styles.h1}>medicine record</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/7.png" height={100} width={100} />
          </button>
          <hr />
          <button onClick={() => setShowBlood(true)}>
            <h1 className={styles.h1}>Blood Bank</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/10.png" height={100} width={100} />
          </button>
          <hr />
          <button onClick={() => setShowAnalyzing(true)}>
            <h1 className={styles.h1}>Analyzing</h1>
            <img src="https://shifaa.kau.edu.sa/assets/images/icons/5.png" height={100} width={100} />
          </button>
          <hr />
        </div>
      </section>
      <AddMRN show={showMRN} setShow={setShowMRN} Appointment={Appointment} />
      <AddRays show={showRays} setShow={setShowRays} Appointment={Appointment} />
      {/* <AddAppo show={showAppointment} setShow={setShowAppointment} /> */}
      <AddVaccine show={showVaccine} setShow={setShowVaccine} Appointment={Appointment} />
      <AddMedicine show={showmedicinerecord} setShow={setShowmedicinerecord} Appointment={Appointment} />
      <AddBlood show={showBlood} setShow={setShowBlood} Appointment={Appointment} />
      <AddAnlyzing show={showAnalyzing} setShow={setShowAnalyzing} Appointment={Appointment} />
    </>
  )
}

export default OneAppoientment

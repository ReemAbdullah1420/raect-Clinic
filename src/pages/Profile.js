import { useContext, useState } from "react"
import ViewAnlyzing from "../components/ViewAnlyzing"
import ViewAppoientment from "../components/ViewAppoientment"
import ViewBlood from "../components/ViewBlood"
import ViewMedicine from "../components/ViewMedicine"
import ViewMRN from "../components/ViewMRN"
import ViewRays from "../components/ViewRays"
import ViewVaccine from "../components/ViewVaccine"
import ClinicContext from "../utils/ClinicContext"
import styles from "./Profile.module.css"
function Profile() {
  const { Profiles } = useContext(ClinicContext)
  const [showMRN, setShowMRN] = useState(false)
  const [showRays, setShowRays] = useState(false)
  const [showAppointment, setShowAppointment] = useState(false)
  const [showVaccine, setShowVaccine] = useState(false)
  const [showmedicinerecord, setShowmedicinerecord] = useState(false)
  const [showBlood, setShowBlood] = useState(false)
  const [showAnalyzing, setShowAnalyzing] = useState(false)
  if (!Profiles) return <h1>Loading...</h1>
  return (
    <>
      <section className={styles.ourservices}>
        <div className={styles.contentprofilepage}>
          <div className={styles.profileuserpage}>
            <div className={styles.imguserprofile}>
              <img
                className={styles.profilebgHome}
                src="https://media.mumzworld.com/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/P/R/PRT-498749.jpg"
              />

              <img className={styles.avatar} src={Profiles.image} />
              <div className={styles.userprofiledata}>
                <p style={{ color: "black" }}>
                  <strong> Name:</strong>

                  {Profiles.firstName}
                  {Profiles.lastName}
                </p>
                <hr />
                <p>
                  <strong> Email:</strong>

                  {Profiles.email}
                </p>
                <hr />
                <div className={styles.inner}>
                  <div className={styles.link}>
                    <button onClick={() => setShowRays(true)}>
                      <h5 className={styles.h5}>Rays</h5>
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/6.png" height={100} width={100} />
                    </button>
                  </div>
                  <hr />
                  <button onClick={() => setShowMRN(true)}>
                    <h5 className={styles.h5}>MRN</h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/1.png" height={100} width={100} />
                  </button>
                  <hr />
                  <button onClick={() => setShowAppointment(true)}>
                    <h5 className={styles.h5}>Appoientment</h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/3.png" height={100} width={100} />
                  </button>
                  <hr />
                  <button onClick={() => setShowVaccine(true)}>
                    <h5 className={styles.h5}>Vaccine</h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/11.png" height={100} width={100} />
                  </button>
                  <hr />

                  <button onClick={() => setShowmedicinerecord(true)}>
                    <h5 className={styles.h5}>Medicine Record</h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/7.png" height={100} width={100} />
                  </button>
                  <hr />
                  <button onClick={() => setShowBlood(true)}>
                    <h5 className={styles.h5}>Blood Bank </h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/10.png" height={100} width={100} />
                  </button>
                  <hr />
                  <button onClick={() => setShowAnalyzing(true)}>
                    <h5 className={styles.h5}>Analyzing</h5>
                    <img src="https://shifaa.kau.edu.sa/assets/images/icons/5.png" height={100} width={100} />
                  </button>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ViewMRN show={showMRN} setShow={setShowMRN} />
      <ViewRays show={showRays} setShow={setShowRays} />
      <ViewAppoientment show={showAppointment} setShow={setShowAppointment} />
      <ViewVaccine show={showVaccine} setShow={setShowVaccine} />
      <ViewMedicine show={showmedicinerecord} setShow={setShowmedicinerecord} />
      <ViewBlood show={showBlood} setShow={setShowBlood} />
      <ViewAnlyzing show={showAnalyzing} setShow={setShowAnalyzing} />
    </>
  )
}

export default Profile

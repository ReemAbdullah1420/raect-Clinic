import { useContext, useState } from "react"
import AddAppo from "../components/AddAppo"
import ClinicContext from "../utils/ClinicContext"
import styles from "./Profile.module.css"
function ProfileDoctor() {
  const { ProfilesDoctor } = useContext(ClinicContext)
  const [show, setShow] = useState(false)
  if (!ProfilesDoctor) return <h1>Loading...</h1>

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
              <img className={styles.avatar} src={ProfilesDoctor.image} />
              <div className={styles.userprofiledata}>
                <>
                  <p>
                    <strong>Name:</strong>
                    {ProfilesDoctor.firstName}
                    {ProfilesDoctor.lastName}
                  </p>
                  <hr />
                  <p>
                    <strong> Email:</strong>
                    {ProfilesDoctor.email}
                  </p>
                  <hr />
                  <p>
                    <strong>specialization::</strong>
                    {ProfilesDoctor.specialization}
                  </p>
                  <hr />
                  <button
                    style={{
                      padding: 15,
                      borderRadius: "10px",
                      color: "black",
                      margin: 20,
                      backgroundColor: "#4e7ca7",
                    }}
                    onClick={() => setShow(true)}
                  >
                    Add Appoientment
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddAppo show={show} setShow={setShow} />
    </>
  )
}

export default ProfileDoctor

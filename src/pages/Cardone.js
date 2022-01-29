import styles from "./CardOne.module.css"
import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import ClinicContext from "../utils/ClinicContext"
import Appointments from "../components/Appentmeent"
function CardOne() {
  const { sectionId } = useParams()
  const { sections } = useContext(ClinicContext)
  const [show, setShow] = useState(false)
  if (!sections) return <p> loding... </p>
  // زيها ف الون ابوينت مينت اسوي
  const sectionss = sections.find(section => section._id === sectionId)

  return (
    <>
      {" "}
      <section className={styles.ourservices}>
        <div>
          <img src={sectionss.image} style={{ width: "80%", marginLeft: "10%", height: 400 }} />
          <hr />
          <h2 className={styles.title}>{sectionss.name}</h2>
        </div>
        <br />
        <div className={styles.show}>
          <h2 className={styles.h2}>{sectionss.name}</h2>
          <p className={styles.p}>{sectionss.description}</p>
          <hr />
          <h2 className={styles.h2}>We Provide The Following Services:</h2>
          {sectionss.services?.map(servicer => (
            <ul>
              <li>{servicer.service} </li>
            </ul>
          ))}
          <hr />
          <h2 className={styles.h2}>Select Your Doctor:</h2>
          <div className={styles.contener}>
            {sectionss?.doctors.map(doctor => (
              <div>
                <img src={doctor.image} style={{ heghit: 200, width: 200 }} />
                <p>
                  {doctor.firstName} {doctor.lastName}
                </p>
                {/* <p>{doctor.specialization}</p> */}
                <button
                  style={{ textAlign: "center", backgroundColor: "#4e7ca7", color: "#fff" }}
                  onClick={() => setShow(true)}
                >
                  Book Now
                </button>

                <Appointments show={show} setShow={setShow} doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
    </>
  )
}

export default CardOne

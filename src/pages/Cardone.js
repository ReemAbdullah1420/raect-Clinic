import styles from "./CardOne.module.css"
import imageee from "../assets/1.png"
import { Link, useParams } from "react-router-dom"
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

  console.log(sections)

  return (
    <>
      {" "}
      <section className={styles.ourservices}>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.LDS7NAsczYW6XabhPVDNRQHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            style={{ width: "80%", marginLeft: "10%", height: 400 }}
          />
          <hr />
          <h2 className={styles.title}>{sectionss.name}</h2>
        </div>
        <br />
        <div className={styles.show}>
          <h2 className={styles.h2}>{sectionss?.name}</h2>
          <p className={styles.p}>{sectionss?.description}</p>
          <hr />
          <h2 className={styles.h2}>We Provide The Following Services:</h2>
          {sectionss.services?.map(servicer => (
            <ul>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
              <li>{servicer.service} </li>
            </ul>
          ))}
          <hr />
          <h2 className={styles.h2}>Select Your Doctor:</h2>
          {sectionss?.doctors.map(doctor => (
            <>
              <div className={styles.wrapper}>
                <div className={styles.cols}>
                  <div className={styles.col} ontouchstart="this.classList.toggle('hover');">
                    <div className={styles.container}>
                      <div className={styles.front} style={{ backgroundImage: ` url("${doctor.image}")` }}>
                        <div className={styles.inner}>
                          <p>
                            {doctor.firstName} {doctor.lastName}
                          </p>
                          <p>{doctor.specialization}</p>
                        </div>
                      </div>
                      <div className={styles.back}>
                        <div className={styles.inner}>
                          <button onClick={() => setShow(true)}>Book Now</button>
                          {/* <button>Book Now</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Appointments show={show} setShow={setShow} doctor={doctor} />
            </>
          ))}
        </div>
      </section>{" "}
    </>
  )
}

export default CardOne

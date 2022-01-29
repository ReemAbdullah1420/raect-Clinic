import { useContext } from "react"
import { Link } from "react-router-dom"
import "../style.css"
import ClinicContext from "../utils/ClinicContext"
function Tableitem() {
  const {ProfilesDoctor } = useContext(ClinicContext)
  console.log(ProfilesDoctor)
  // if (!Appointments) return <p> loding..</p>

  return (
    <>
      <section>
        <div style={{ marginTop: "200px" }} class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>user</th>
                <th style={{ textAlign: "center" }}>email</th>
                <th style={{ textAlign: "center" }}>image</th>
                <th style={{ textAlign: "center" }}>Show</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {ProfilesDoctor.Appointments?.map(Appointment => (
                <tr style={{ color: "black" }}>
                  <td style={{ textAlign: "center" }}>
                    {Appointment.userId.firstName}
                    {Appointment.userId.lastName}
                  </td>
                  <td style={{ textAlign: "center" }}>{Appointment.userId.email}</td>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src={Appointment.userId.image}
                      style={{ objectFit: "contain", height: "70px", borderRadius: "50%" }}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Link to={`/appoientent/${Appointment._id}`}>
                      <button style={{ color: "black", backgroundColor: "#fff", borderRadius: 9 }}>show</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Tableitem

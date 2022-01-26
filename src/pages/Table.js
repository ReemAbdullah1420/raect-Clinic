import { Link } from "react-router-dom"
import "../style.css"
function Tableitem() {
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
                {/* <th style={{textAlign:"center"}}></th>
          <th style={{textAlign:"center"}}>/th> */}
                <th style={{ textAlign: "center" }}>Show</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr style={{ color: "black" }}>
                <td style={{ textAlign: "center" }}> sss</td>
                <td style={{ textAlign: "center" }}>sssss</td>
                <td style={{ textAlign: "center" }}>ss</td>
                <td style={{ textAlign: "center" }}>
                  {/* <Link to="/:Appointment">
                    <button>show</button>
                  </Link> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Tableitem

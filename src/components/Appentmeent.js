import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function Appointments(props) {
  const { show, setShow, doctor } = props
  const { booking } = useContext(ClinicContext)

  if (!doctor) return <p> loding..</p>
  // if(!Booking) return <p>loding..</p>
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={booking}>
          <Modal.Header>
            <Modal.Title>Booking </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {doctor.AvailableAppointments?.map(Appointment => (
              <Col md="8">
                <Row>
                  <Col>
                    {/* <Form.Check type="radio" name="time" label={Appointment.time} value={Appointment._id} /> */}
                    <Form.Check
                      type="radio"
                      name="date"
                      label={`${Appointment.date},${Appointment.time}`}
                      value={Appointment._id}
                    />
                  </Col>
                </Row>
              </Col>
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Appointments

import { useContext } from "react"
import { Button, Form, ListGroup, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewAppoientment(props) {
  const { Profiles } = useContext(ClinicContext)
  const { show, setShow } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Appoientment </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.Appointments?.map(Appointment => (
                <>
                  <ListGroup.Item>
                    <strong>Time:</strong>
                    {Appointment.time}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Date:</strong>
                    {Appointment.date.split("",10)}
                  </ListGroup.Item>
                </>
              ))}
            </ListGroup>
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

export default ViewAppoientment

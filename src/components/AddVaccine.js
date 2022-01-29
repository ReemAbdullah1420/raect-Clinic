import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddVaccine(props) {
  const { show, setShow, Appointment } = props
  const { addVaccine } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addVaccine(e, Appointment._id)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Vaccine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                vaccineType
              </Form.Label>
              <Col md="8">
                <Form.Control name="vaccineType" type="text" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                doseDate
              </Form.Label>
              <Col md="8">
                <Form.Control type="date" name="doseDate" required />
              </Col>
            </Form.Group>
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

export default AddVaccine

import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddMedicine(props) {
  const { show, setShow, Appointment } = props
  const { addmedicine } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addmedicine(e, Appointment._id)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>medicine record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                name
              </Form.Label>
              <Col md="8">
                <Form.Control name="name" type="text" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                strength
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="strength" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
              dosageForm
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="dosageForm" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                routeOfAdministration
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="routeOfAdministration" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                packageSize
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="packageSize" required />
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

export default AddMedicine

import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddAppo(props) {
  const { show, setShow, Appointment } = props
  const { addAppoientment } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={addAppoientment}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Appoientment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                Time
              </Form.Label>
              <Col md="8">
                <Form.Control name="time" type="number" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                date
              </Form.Label>
              <Col md="8">
                <Form.Control type="date" name="date" required />
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

export default AddAppo

import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddRays(props) {
  const { show, setShow, Appointment } = props
  const { addRays } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addRays(e, Appointment._id)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Rays</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                rayName
              </Form.Label>
              <Col md="8">
                <Form.Control name="rayName" type="text" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                rayImage
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="rayImage" required />
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

export default AddRays

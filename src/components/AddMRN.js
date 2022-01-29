import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddMRN(props) {
  const { show, setShow, Appointment } = props
  const { addMRN } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addMRN(e, Appointment._id)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>MRN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                fileNumber
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="fileNumber" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                gender
              </Form.Label>
              <Col md="8">
                <Form.Control name="gender" type="text" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                nationality
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="nationality" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                bloodType
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="bloodType" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                sensitivity
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="sensitivity" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                mobilePhone
              </Form.Label>
              <Col md="8">
                <Form.Control type="phone" name="mobilePhone" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                age
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="age" required />
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

export default AddMRN

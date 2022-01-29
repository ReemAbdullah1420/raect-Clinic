import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function AddBlood(props) {
  const { show, setShow, Appointment } = props
  const { addBlood } = useContext(ClinicContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addBlood(e, Appointment._id)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Blood Bank </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                bloodType
              </Form.Label>
              <Col md="8">
                <Form.Control name="bloodType" type="text" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label style={{ color: "black" }} column md="3">
                bloodDonor
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="bloodDonor" required />
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

export default AddBlood

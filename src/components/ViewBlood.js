import { useContext } from "react"
import { Button, Form, ListGroup, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewBlood(props) {
  const { show, setShow } = props
  const { Profiles } = useContext(ClinicContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Blood Bank </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.Blood?.map(blood => (
                <>
                  <ListGroup.Item>
                    <strong> BloodType:</strong>
                    {blood.bloodType}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>BloodDonor:</strong>
                    {blood.bloodDonor}
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

export default ViewBlood

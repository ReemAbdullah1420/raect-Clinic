import { useContext } from "react"
import { Button, Form, ListGroup, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewMRN(props) {
  const { show, setShow } = props
  const {Profiles } = useContext(ClinicContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>MRN </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.MadacalFile?.map(MRN => (
                <>
                  <ListGroup.Item>
                    <strong>fileNumber:</strong>
                    {MRN.fileNumber}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>gender:</strong>
                    {MRN.gender}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>nationality :</strong>
                    {MRN.nationality}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>bloodType:</strong>
                    {MRN.bloodType}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>sensitivity:</strong>
                    {MRN.sensitivity}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>mobilePhone:</strong>
                    {MRN.mobilePhone}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>age:</strong>
                    {MRN.age}
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

export default ViewMRN

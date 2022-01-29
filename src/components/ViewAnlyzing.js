import { useContext } from "react"
import { Button, Form, ListGroup, Modal, Row } from "react-bootstrap"
import Profile from "../pages/Profile"
import ClinicContext from "../utils/ClinicContext"

function ViewAnlyzing(props) {
  const { Profiles } = useContext(ClinicContext)
  const { show, setShow } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Anlyzing </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.Analyzings?.map(Analyzing => (
                <>
                  <ListGroup.Item>
                    <strong>analysisName:</strong>
                    {Analyzing.analysisName}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>value:</strong>
                    {Analyzing.value}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>normalValue:</strong>
                    {Analyzing.normalValue}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>explanation:</strong>
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

export default ViewAnlyzing

import { useContext } from "react"
import { Button, Form, Image, ListGroup, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewRays(props) {
  const { show, setShow } = props
  const { Profiles } = useContext(ClinicContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Rays </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
            {Profiles.Rays?.map(Ray => (
                <>
                  <ListGroup.Item>
                    <strong>rayName :</strong>
                    {Ray.rayName}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong> rayImage:</strong>{" "}
                    <Image src={Ray.rayImage} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
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

export default ViewRays

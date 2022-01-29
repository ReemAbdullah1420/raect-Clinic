import { useContext } from "react"
import { Button, Form, ListGroup, Modal, Row } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewVaccine(props) {
  const { show, setShow } = props
  const { Profiles } = useContext(ClinicContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Vaccine </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.Vaccines?.map(vaccine => (
                <>
                  {" "}
                  <ListGroup.Item>
                    <strong>vaccineType :</strong>
                    {vaccine.vaccineType}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong> doseDate:</strong>
                    {vaccine.doseDate.split("", 10)}
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

export default ViewVaccine

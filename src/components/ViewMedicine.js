import { useContext } from "react"
import { Button, Form, ListGroup, Modal } from "react-bootstrap"
import ClinicContext from "../utils/ClinicContext"

function ViewMedicine(props) {
  const { show, setShow } = props
  const { Profiles } = useContext(ClinicContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Medicine Records </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {Profiles.Medicinerecords?.map(medicineRecord => (
                <>
                  <ListGroup.Item>
                    <strong>Name:</strong>
                    {medicineRecord.Name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>strength:</strong>
                    {medicineRecord.strength}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong> dosageForm:</strong>
                    {medicineRecord.dosageForm}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>routeOfAdministration:</strong>
                    {medicineRecord.routeOfAdministration}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>packageSize:</strong>
                    {medicineRecord.packageSize}
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

export default ViewMedicine

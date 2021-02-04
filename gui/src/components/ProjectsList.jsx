import {
  Row,
  Card,
  Col,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ProjectsList = ({ projects, handleEdit, handleDelete }) => {
  return (
    <Row>
      {projects?.map((proj) => (
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{proj.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {proj.description}
                <div className="mt-3">
                  <h5>Lokalizacja:</h5>
                  <h6>Miasto: {proj.localization.city}</h6>
                  <h6>Region: {proj.localization.district}</h6>
                  <h6>
                    Współrzędne geograficzne: {proj.localization.coordinates}
                  </h6>
                </div>
              </CardSubtitle>
              <CardBody></CardBody>
              <Button className="mr-3" onClick={() => handleEdit(proj)}>
                Edytuj
              </Button>
              <Button onClick={() => handleDelete(proj)}>Usuń</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;

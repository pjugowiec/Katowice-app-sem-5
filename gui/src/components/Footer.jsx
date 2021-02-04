import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container
      className="fixed-bottom"
      fluid
      style={{ backgroundColor: "#f2f7f7" }}
    >
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center"
          style={{ height: 50 }}
        >
          <h3>Autorzy: Cyryl Błażyca, Paulina Osóbka </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

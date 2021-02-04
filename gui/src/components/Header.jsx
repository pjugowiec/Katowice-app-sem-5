import { Container } from "reactstrap";

const Header = ({ label }) => {
  return (
    <Container fluid style={{ backgroundColor: "#f2f7f7" }}>
      <Container
        style={{ height: 100 }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1>{label}</h1>
      </Container>
    </Container>
  );
};

export default Header;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Header, MyCarousel } from "../../components";

const DashboardPage = () => {
  return (
    <>
      <Header label={"KATOWICE"} />
      <Container>
        <Row>
          <Col>
            <MyCarousel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;

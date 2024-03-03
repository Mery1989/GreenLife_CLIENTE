import { useEffect, useState } from "react";
import {Row, Col } from "react-bootstrap";
import Plants from "../../components/Plants/Plants";
import Events from "../../components/Events/Events";

const CardList = () => {
  return (
    <Row>
      {events.map((event) => (
        <Col md={4} key={event._id}>
          <Events {...event} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;

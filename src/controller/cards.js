import React, { Component } from "react";
import { Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiPencil } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";

class Cards extends Component {
  getDate() {
    this.setState({ date: Date() });
  }

  render() {
    return (
      <section className="p-2 ">
        <Card border="warning" style={{ width: "auto" }}>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <Card.Text className="me-auto"> {this.props.list} </Card.Text>
              <TiPencil
                onClick={() => this.props.onEdit(this.props.id)}
                size={"25"}
                cursor={"pointer"}
              />

              <AiFillDelete
                onClick={() => this.props.onDelete(this.props.id)}
                size={"25"}
                cursor={"pointer"}
              />
            </Stack>
          </Card.Body>
        </Card>
      </section>
    );
  }
}

export default Cards;

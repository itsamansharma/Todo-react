import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({ userInput: value });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),

        value: this.state.userInput,
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <Container>
        <Row>TODO LIST</Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark" size="lg" onClick={() => this.addItem()}>
                  ADD
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {/* map over and print items */}
              {this.state.list.map((item) => {
                return (
                  <ListGroup.Item
                    variant="dark"
                    action
                    onClick={() => this.deleteItem(item.id)}
                  >
                    {item.value}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Cards from "./cards";

class Vault extends Component {
  state = {
    btnName: "Done",
    // updateName: "Update",
    inp: "",
    array: [],
  };

  handelclick = () => {
    this.setState({ btnName: "Done" });
    let { inp } = this.state;
    // this.setState({ id: this.array.id + 1 });
    if (inp.length > 0) {
      const userInput = {
        id: Math.random(),
        value: inp,
      };

      const array = [...this.state.array];
      array.push(userInput);

      this.setState({ array, inp: "" });
    } else console.log("kuch to likho");
  };

  handelChange = (e) => {
    e.preventDefault();
    this.setState({ inp: e.target.value }); // setting inp = entered value
  };

  handelDelete = (e) => {
    const array = this.state.array.filter((c) => c.id !== e);
    this.setState({ array });
  };

  handelEdit = (e) => {
    const temp = this.state.array.find((c) => c.id === e);

    this.setState({ inp: temp.value });
    this.setState({ btnName: "update" });
    this.handelDelete(e);

    // console.log(temp);
  };

  render() {
    return (
      <>
        <div style={{ width: "70%", margin: "auto" }}>
          <h1 className="my-5">Todo app</h1>
          <hr />
          <InputGroup
            className="my-5"
            style={{ width: "100%", margin: "auto" }}
          >
            <FormControl
              value={this.state.inp}
              onChange={this.handelChange}
              placeholder="enter task to do"
            />
            <Button
              type="submit"
              className="btn btn-warning"
              onClick={() => this.handelclick()}
            >
              {this.state.btnName}
            </Button>
          </InputGroup>

          {this.state.array.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              list={item.value}
              onDelete={(e) => this.handelDelete(e)}
              onEdit={(e) => this.handelEdit(e)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Vault;

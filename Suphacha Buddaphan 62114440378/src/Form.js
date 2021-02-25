import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    bloodtype: "",
    activity: "",
    food: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
   
    this.setState({
      firstName: "",
      lastName: "",
      bloodtype: "",
      activity: "",
      food: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      bloodtype: "",
      activity: "",
      food: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="bloodtype"
          placeholder="Bloodtype"
          value={this.state.bloodtype}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="activity"
          placeholder="Activity"
          value={this.state.activity}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="food"
          type="food"
          placeholder="Food"
          value={this.state.food}
          onChange={e => this.state({ food: e.target.value })}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

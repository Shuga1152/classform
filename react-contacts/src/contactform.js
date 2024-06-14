// src/ContactsForm.js
import React, { Component } from 'react';

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      location: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', phone: '', location: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactsForm;

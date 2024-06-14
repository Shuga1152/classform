// src/App.js
import React, { Component } from 'react';
import './App.css';
import Contacts from './contacts';
import ContactsForm from './contactform' ;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'John Doe', phone: '123-456-7890', location: 'New York' },
        { name: 'Jane Smith', phone: '987-654-3210', location: 'Los Angeles' },
        { name: 'Sam Johnson', phone: '555-555-5555', location: 'Chicago' },
      ]
    };
  }

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts List</h1>
        <Contacts contacts={this.state.contacts} />
        <ContactsForm addContact={this.handleAddContact} />
      </div>
    );
  }
}

export default App;

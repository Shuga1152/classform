// src/Contacts.js
import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>Name:</strong> {contact.name} <br />
          <strong>Phone:</strong> {contact.phone} <br />
          <strong>Location:</strong> {contact.location}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

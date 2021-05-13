import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => {
        return (
          <ListGroup.Item key={contact.id}>{contact.userName}</ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

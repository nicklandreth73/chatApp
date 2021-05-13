import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((previousSelectedContactIds) => {
      if (previousSelectedContactIds.includes(contactId)) {
        return previousSelectedContactIds.filter(
          (prevId) => prevId !== contactId
        );
      } else {
        return [...previousSelectedContactIds, contactId];
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.userName}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit"> Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

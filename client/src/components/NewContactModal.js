import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const userNameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, userNameRef.current.value);
    closeModal();
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" ref={userNameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit"> Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

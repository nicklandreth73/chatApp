import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id, userName) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, userName }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

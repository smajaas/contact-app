import "./App.css";
import React, { useEffect, useState } from "react";
//import { uuid } from "uuidv4";
import { v4 as uuid_v4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid_v4(), ...contact }]);  //uuid for automatic id
  };

//Delete function to delete user

const removeContactHandler= (id) => {

  //Create copy of contact list to delete user
  const newContactList = contacts.filter((contact)=> {
    return contact.id !==id;
  });

  setContacts(newContactList);
}
  //To store the data in local storage while refreshing

  useEffect(() => {
    const retreiveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retreiveContacts) setContacts(retreiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;

import React,{ useEffect, useState } from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import "./App.css";
import { v4 as uuid_v4 } from "uuid";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

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
  <Router>
  <Header />
     <Switch>
    <Route 
    path="/" 
    exact 
    render={(props)=>(<ContactList {...props} 
      contacts={contacts}
      getContactId={removeContactHandler}
      />)}
    /> 
     <Route path="/add" 
      render={(props)=>(<AddContact {...props} 
      addContactHandler={addContactHandler}
        />)}
    />
     </Switch>
     </Router>
     </div>
  );
}

export default App;



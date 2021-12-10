import './App.css';
import React, {useState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const [contacts,setContacts]=useState([]);

  // const contacts = [
  //   {
  //     id:"1001",
  //     "name":"Ajaas",
  //     "email":"smajaas@yahoo.com",
  //   },

  //   {
  //     id:"1002",
  //     "name":"Afaan",
  //     "email":"afaans@gmail.com",
  //   }
  // ];

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
  };

  return (
   <div className="ui container">
     <Header />
     <AddContact addContactHandler ={addContactHandler}/>
      <ContactList contacts = { contacts } />
   </div>
  );
}

export default App;

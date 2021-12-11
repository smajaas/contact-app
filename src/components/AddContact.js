import React from "react";

class AddContact extends React.Component {
    state= {
        name:"",
        email:"",
    };

add= (e)=>{
    e.preventDefault();
    if(this.state.name ==="" || this.state.email==="") {
        alert("All the fields are Mandatory!");
        return;
    }

    //Add user in app.js using props as addContactHandler
    this.props.addContactHandler(this.state);

    //Clear fields once we add users and add it in App.js

    this.setState({ name:"",email:""});

    //Once we successfully add the user it will automatically navigate to home 
    this.props.history.push("/");
    console.log(this.props);

};
render() {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={ (e) => this.setState( {name:e.target.value})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={ (e) => this.setState( {email:e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}


}

export default AddContact;
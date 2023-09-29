import React, { useState } from "react";


const Contact = (props) => {
  const [cred, setCred] = useState({ name:"",email: "", phone: "" ,message:""});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const response = await fetch("http://50.19.98.234/api/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name:cred.name,Email: cred.email, Phone: cred.phone,Message:cred.message }),
    });
    console.log("test");
    const json = await response.json();
    console.log(json);
    
  };
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-3 ">
      <h2 className="text-center my-3">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3 ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            
            onChange={onChange}
            name="name"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            
            onChange={onChange}
            name="email"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            
            minLength={10}
            onChange={onChange}
            name="phone"
          ></input>
        </div>
        <div className="my-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            
            onChange={onChange}
            name="message"
            
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

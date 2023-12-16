// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  // Here usestate has been used in order
  // to set and get values from the jsx
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setid] = useState("");
  

  //adding regex

  


  // useeffect for the regex

  
  // Used for navigation with logic in javascript
  let history = useNavigate();

  // Getting an index of an entry with an id
  let index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  // Function for handling the edit and
  // pushing changes of editing/updating
  const handelSubmit = (e) => {
    // Preventing from reload
    e.preventDefault();
    if (name === "" || phone === "" || email === "") {
      alert("invalid input");
      return;
    }

    // Getting an index of an array
    let a = array[index];

    // Putting the value from the input
    // textfield and replacing it from
    // existing for updation
    a.Name = name;
  
    a.Email = email;
    a.Phone = phone;

    // Redirecting to main page
    history("/");
  };

  // Useeffect take care that page will
  // be rendered only once
  useEffect(() => {
    setname(localStorage.getItem("Name"));
    setPhone(localStorage.getItem("Phone"));
    setEmail(localStorage.getItem("Email"));
    setid(localStorage.getItem("id"));
  }, []);




  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        {/* setting a name from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          {/* <h6>{username}</h6> */}
        </Form.Group>

        {/* setting a phone from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="phone"
          />
          {/* <h6>{phoneerror}</h6> */}
        </Form.Group>

        {/* setting an email from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          {/* <h6>{error}</h6> */}
        </Form.Group>

        {/* Hadinling an onclick event 
					running an edit logic */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

        {/* Redirecting to main page after editing */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;

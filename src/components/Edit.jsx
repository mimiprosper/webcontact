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
  const [error, setError] = useState(null);
  const [phoneerror, setPhoneError] = useState(null);
  const [username, setUsername] = useState(null);

  // regex implementation
  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Email must be a valid address, e.g. me@mydomain.com");
    } else {
      setError("");
    }
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError(
        "Telephone must be a valid 9ja telephone number (11 digits)"
      );
    } else {
      setPhoneError("");
    }
  };

  const validateUsername = () => {
    const usernameRedex = /^[a-z\d]{5,12}$/i;
    if (!usernameRedex.test(name)) {
      setUsername("Username must be  and contain 5 - 12 characters");
    } else {
      setUsername("");
    }
  };

  //regex implementation using usestate to fetch values
  useEffect(() => {
    validateEmail();
  });

  useEffect(() => {
    validatePhone();
  });

  useEffect(() => {
    validateUsername();
  });

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
    a.Age = phone;
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
          <h6>{username}</h6>
        </Form.Group>

        {/* setting a phone from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="phone"
          />
          <h6>{phoneerror}</h6>
        </Form.Group>

        {/* setting an email from the input textfiled */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <h6>{error}</h6>
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

// Filename - components/Create.js

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  // Making usestate for setting and
  // fetching a value in jsx
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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

  // useEffect for fetching a values
  useEffect(() => {
    validateEmail();
  });

  useEffect(() => {
    validatePhone();
  });

  useEffect(() => {
    validateUsername();
  });

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = name,
      b = phone,
      c = email;

    if (name === "" || phone === "" || email === "") {
      alert("invalid input");
      return;
    }

    array.push({ id: uni, Name: a, Phone: b, Email: c });

    // Redirecting to home page after creation done
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        {/* Fetching a value from input textfirld 
					in a setname using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
          <h6>{username}</h6>
        </Form.Group>

        {/* Fetching a value from input textfirld in
					a setage using usestate*/}
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Enter Phone"
            required
          />
          <h6>{phoneerror}</h6>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
            required
          />
          <h6>{error}</h6>
        </Form.Group>

        {/* handing a onclick event in button for
					firing a function */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;

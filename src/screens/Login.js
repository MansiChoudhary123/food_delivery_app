import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credential, setCredential] = useState({
    email: '',
    password: ''
  });
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password
      }),
    });

    // Handle the response as needed
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid credentials');
    }
    if (json.success) {
      localStorage.setItem("userEmail",credential.email);
      localStorage.setItem("authToken",json.authToken);
      navigate("/");
    }
  }; // Added the missing closing bracket here

  const onChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <div className='container'>
       <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credential.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>
        
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger">
          i am a new user
        </Link>
      </form>
    </div>
  )
}

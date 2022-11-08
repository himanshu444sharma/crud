import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Contect from './Contect';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function Add() {

  const [name, setName] = useState();
  const [password, setpassword] = useState();

  let history = useNavigate()
  {
    let data = { name, password }
    fetch("http://localhost:4001/create", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    Contect.push({ name: name, password: password, });
    history("/");

  }

  return (
    <div>

<Grid container spacing={2}>
  <Grid item xs={4} md={4} sx={{mx:'auto'}}>
  <Form  >
        <Form.Group  >
          <Form.Control  type="text" placeholder="Enter Username" required onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group  >
          <Form.Control size="medium" type="Text" placeholder="Enter Password" required onChange={(e) => setpassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="Submit">Save New user</Button>
      </Form>
  </Grid>
</Grid>

     
    </div>
  )
}
export default Add;
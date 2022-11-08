// import React, { Fragment } from 'react'
// import { Button,Table } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Contect from './Contect';

// import { Link,useNavigate } from 'react-router-dom';

// const Home = ()=>{


//     let history = useNavigate();

//     const handleEdit =(id , name, age) =>{
//         localStorage.setItem('Name', name);
//         localStorage.setItem('Age', age);
//         localStorage.setItem('Id', id);

//     }



//     const handleDelete = (id)=>{
//         var index = Contect.map(function(e){
//             return e.Id
//         }).indexOf(id);

//         Contect.splice(index,1);

//         history('/')
//     }
//   return (
//     <> 
//     <Fragment>

//         <div style={{margin:"10rem"}} >
//         <Table striped bordered hover size= "sm">
//             <thead>
//                 <tr>
//                     <th>
//                         Name
//                     </th>
//                     <th>
//                         age
//                     </th>
//                     <th>
//                         Actions
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {

//                     Contect.map((item)=>{
//                         return(
//                             <tr>
//                                 <td>
//                                     {item.name}
//                                 </td>
//                                 <td>
//                                     {item.age}
//                                 </td>

//                                 <td>
//                                 <Link to={'/Edit'}>
//                                 <Button onClick={()=>handleEdit(item.Id, item.name, item.age)}>Edit</Button>
//                                 </Link>
//                                 &nbsp;
//                                 <Button onClick={()=>handleDelete(item.Id)}>Delete</Button>
//                                 </td>
//                             </tr>
//                         )
//                     })

//                 }
//             </tbody>
//         </Table>
//         <br/>
//         <Link className='d-grid gap-2' to="/create">
//             <Button size="lg">Create</Button>
//         </Link>

//         </div>
//     </Fragment>
//     </>
//   )
// }
// export default Home
import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()

  const [fireAlert, setFireAlert] = useState(false);
  const [loginInfo, setLoginInfo] = useState({})
  const [save, setsave] = useState({})

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginInfo(values => ({ ...values, [name]: value }));
  }

  const postData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginInfo)
    };
    fetch('http://localhost:4001/login', requestOptions)
      .then(res => res.json())
      .then(data => {data.type?navigate("/about"):alert(data.message)});
      

    
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6} md={6} sx={{ marginLeft: "25%", marginTop: "15%" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& > :not(style)': { m: 1 },
                }}
              >
                <TextField
                  helperText="Please enter your username"
                  id="demo-helper-text-misaligned"
                  type="name"
                  label="Username"
                  name='name'
                  onChange={handleInput}
                />
                <TextField
                  helperText="Please enter your password"
                  id="demo-helper-text-misaligned"
                  type="password"
                  label="Password"
                  name='password'
                  onChange={handleInput}
                />
              </Box>
              <Button variant="outlined" onClick={postData}>Login</Button>
              <Link   to="/create">
          <Button variant= "outlined"  size="medium">Register</Button>
        </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} md={6} sx={{ marginLeft: "25%" }}>
          {fireAlert ? <Alert severity="success" sx={{ marginTop: "10px" }}><i>Successfully LogedIn  : </i></Alert> : <></>}

         

        </Grid>
      </Grid>
      <Fragment>
       
      </Fragment>
    </>
  );
}
export default Home;
import React,{useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap';
import Contect from './Contect';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';

function Edit(){
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[id,setId] = useState("");
  
    let history = useNavigate()
    var index = Contect.map(function(e){
        return e.Id
    }).indexOf(id);

    const handleSubmit = (e)=>{
        e.preventDefault();

        let a = Contect[index];
        a.name = name;
        a.age = age;
    
      
        history("/");
      }
      useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))

      },[])

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"rem"}}>
    <Form.Group className='mb-3' controlId= "FormName">
      <Form.Control type="text" placeholder="Enter Name" required  value ={name} onChange={(e) => setName(e.target.value)}></Form.Control>
    </Form.Group>
    <Form.Group className='mb-3' controlId= "FormAge">
      <Form.Control type="Number" placeholder="Enter Age" required value ={age}  onChange={(e) => setAge(e.target.value)}></Form.Control>
    </Form.Group>
    <Button onClick={(e)=> handleSubmit(e)} type="Submit">Update</Button>
  </Form>
        </div>
    )
}
export default Edit;
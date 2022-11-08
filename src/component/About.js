import React, { useEffect, useState } from 'react';
import '../../src/App.css'


const About = () => {
  const [data, setdata] = useState([])

  const fakestore = async () => {
    const responce = await fetch('https://fakestoreapi.com/products')
    const jsonData = await responce.json();
    setdata(jsonData)
  }

  useEffect(() => {
    fakestore();
  }, [])
  return (
    <>
      <h2> Api Shopping Store</h2>
      
      <div className='container'>
        {data.map((values) => {
          return (
            <>
              <div className='Box'>
                <div className='content'>
                  <h5>{values.title}</h5>
                  <p> Description</p>
                </div>
                <img src={values.image} alt=''></img>
              </div>

            </>

          )
        })}


      </div>
    </>
  )
}
export default About;
import React from 'react';
import Home from './component/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './component/Add';
// import Edit from './component/Edit';
// import Contect from './component/Contect';


function App() {
  return (
    <>

      <div className='App'>

        <Router>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About'  element={<><Navbar /><About /></>} />
            {/* <Route path='/Edit' element={<Edit />} /> */}
            <Route path='/create' element={<Add />} />
            {/* <Route path='/contect' element={<Contect />} /> */}
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;

import React,{Fragment} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Protected from './components/Protected';

import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';

//import {Button} from 'react-bootstrap';

import './App.css';
//import Testing from './components/Testing';



function App() {
  return (
    <>
    <div className="App">


      <BrowserRouter>
        
        
          <Routes>
            <Route path="/" element={<ProductsList />} /> 
            
            
            
            <Route path="/add" element={<Protected cmp={AddProduct}/>} />
            <Route path="/update" element={<Protected cmp={UpdateProduct}/>} />

           
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="*" element={<PageNotFound />}/>
            

          </Routes>
       
         
      
      </BrowserRouter>
      
      
    </div>
    </>
  );
}

export default App;

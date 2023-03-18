import React from 'react';
import BakesMenu from "./components/BakesMenu";
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="container"> 
      <Header />
      <br />
      <br />
      <BakesMenu />       
    </div>
  )
}



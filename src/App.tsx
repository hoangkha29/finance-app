import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import {Header} from './components/organisms/Header'
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';

function App() {
  return (
    <div className="finance-app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/calculator" element={ <Calculator/> }/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './component/dashBoard';
import AddProfile from './component/addProfile';
import FindRelation from './component/relationship';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Dashboard />}>
        </Route>
        <Route path="/add" element={<AddProfile />}>
        </Route>
        <Route path='/find/:id/:id' element={<FindRelation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


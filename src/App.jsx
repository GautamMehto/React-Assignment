// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ShowList';
import ShowDetails from './ShowSummary';

const App = () => {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/show/:id" element={<ShowDetails />} />
  </Routes>
</Router>
  );
};

export default App;

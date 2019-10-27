import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import CmPage from './pages/CmPage'
import InPage from './pages/InPage'

function App() {
  return (
    <Router>
      <div>
        <Link to="/inputnumber">题6：InputNumber演示页面</Link><br />
        <Link to="/confirm">题7：Confirm演示页面</Link>
      </div>
      <div>
        <Route path="/inputnumber" component={InPage} />
        <Route path="/confirm" component={CmPage} />
      </div>
    </Router>
  )
}

export default App;

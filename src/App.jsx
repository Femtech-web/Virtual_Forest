/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [ wallet, setWallet ] = useState(localStorage.getItem('wallet'))

  useEffect(() => {
    setWallet(localStorage.getItem('wallet'))
  }, [wallet, setWallet])
  
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/dashboard' element={wallet ? <Dashboard /> : <Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App

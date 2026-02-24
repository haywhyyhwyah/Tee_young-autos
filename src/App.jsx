import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AutoDriveLanding from './AutoDriveLanding'
import CarsForSale, { sampleCars } from './CarsForSale'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoDriveLanding/>} />
        <Route path="/inventory" element={<CarsForSale cars={sampleCars} />} />
      </Routes>
    </Router>
  )
}

export default App
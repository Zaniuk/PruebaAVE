import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create/Create'
import Edit from './pages/Edit/Edit'
import Home from './pages/Home/Home'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>

  )
}

export default Router
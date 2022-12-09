
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './pages/Form/TaskForm'
import Home from './pages/Home'
function Router() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<TaskForm/>} />
        <Route path="/edit/:id" element={<TaskForm/>} />
      </Routes>
    </BrowserRouter>

      
  )
}

export default Router

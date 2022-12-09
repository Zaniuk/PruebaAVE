
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './pages/Form/TaskForm'
import Home from './pages/Home'
import { TasksProvider } from './common/context/TasksContext'
import { useContext } from 'react'
function Router() {
  

  return (
    <TasksProvider >

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<TaskForm/>} />
        <Route path="/edit/:id" element={<TaskForm/>} />
      </Routes>
    </BrowserRouter>
    </TasksProvider>

      
  )
}

export default Router

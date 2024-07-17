
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
 

  return (
    <BrowserRouter>
   <Routes>
    {/* <Route path='/' element={} */}
<Route path='/login' element={<Login/>}/>
<Route path='/' element={<Register/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App

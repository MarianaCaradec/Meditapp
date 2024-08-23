import { useState } from 'react'
import './App.css'
import {NavBar} from './components/NavBar/NavBar'
import {MeditationsContainer} from './components/MeditationsContainer/MeditationsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Meditation from './components/MeditationsList/MeditationsList'
import MeditationsList from './components/MeditationsList/MeditationsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<MeditationsContainer/>}/>
      <Route path='/informacion' element={<NavBar/>}/>
      {/* <Route path='/meditar/:id' element={<Meditation/>}/> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

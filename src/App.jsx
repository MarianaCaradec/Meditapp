import './App.css'

import {NavBar} from './components/NavBar/NavBar'
import {MeditationsContainer} from './components/MeditationsContainer/MeditationsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectedMeditation from './components/SelectedMeditationContainer/SelectedMeditationContainer'
import Info from './components/Info/Info'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<MeditationsContainer/>}/>
      <Route path='/informacion' element={<Info/>}/>
      <Route path='/meditar/:id' element={<SelectedMeditation/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

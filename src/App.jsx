import { Route, Routes } from 'react-router-dom'

import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Starships />} />
      <Route path='/starships/:starshipId' element={<StarshipDetails />} />
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'

import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App

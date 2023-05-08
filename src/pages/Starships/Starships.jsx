import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarships } from "../../services/sw-api"


const Starships = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getStarships()
      setStarships(starshipData)
    }
    fetchStarships()
  }, [])

  if (!starships.results) return <h1>Loading Starships...</h1>
  
  return (
    <main className="starships">
      <h1>Starships Component</h1>
      {starships.results.map(starship => (
        <div
          key={starship.name}
          className="link-container"
        >
          <Link 
            to={`/starships/${
              starship.url.split('/')[5]
            }`}>{starship.name}</Link>
        </div>
      ))}
    </main>
  )
}

export default Starships
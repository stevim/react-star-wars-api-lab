import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { getStarshipDetails } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)
      console.log(starshipId)
    }
    fetchDetails()
  }, [starshipId])
  
  if (!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return (
    <main>
      {/* <h1>Starship Details</h1> */}
      <h1>{starshipDetails.name}</h1>
      <h3>Model: {starshipDetails.model}</h3>
      <h4><button><Link to={`/`}>Return to Starship List</Link></button></h4>
    </main>
  )
}

export default StarshipDetails
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/starships'>Starships</Link>
        {/* <Link to='/monsters'>Scary Monsters</Link>
        <Link to='/spells'>Search for Spells</Link> */}
      </nav>
    </header>
  )
}

export default NavBar
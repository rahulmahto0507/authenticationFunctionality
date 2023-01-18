import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="list-container">
      <Link to="/">
        <li className="list-element">Home</li>
      </Link>
      <Link to="/about">
        <li className="list-element">About</li>
      </Link>
    </ul>
  </nav>
)
export default Header

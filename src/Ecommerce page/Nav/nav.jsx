import { FaHeart } from 'react-icons/fa'
import './nav.css'
import {AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = ({query,handleInput}) => {
  return (
    <nav>
      <div>
        <input type="text" 
        value={query}
        onChange={handleInput}
        placeholder='Enter your search shoes'/>
      </div>

      <div>
        <a href="" className='nav-icons'>
          <FaHeart/>
        </a>
        <a href="" className='nav-icons'>
          <AiOutlineShoppingCart/>
        </a>
        <a href="" className='nav-icons'>
          <AiOutlineUserAdd/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
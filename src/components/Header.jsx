import React from 'react'
// import { Link } from 'react-router-dom'
import { Link ,useLocation} from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {

  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;
  return (
    <header className='flex justify-between font-roboto items-center p-2 sm:py-5 sm:px-[5%]  w-[80%] mb-5 border-2 border-[#0e4a54] mx-auto mt-2 rounded-2xl bg-gradient-to-r from-deep-green to-light-green text-white'>
        <div>
            <Link to='/'><img src="/logo.svg" alt="tics logo" /></Link>
            {/* <h1>dfdkfdkjfkd</h1> */}
        </div>

        <ul className='sm:inline-flex hidden gap-x-8'>
            <li ><Link to='/event' className={`${isActive('/event')?"text-white": "text-white/50"}`}>Events</Link></li>
            <li><Link to='/ticket' className={`${isActive('/ticket')?"accent-red-300": "text-white/50"}`}>MyTicket</Link></li>
            <li><Link className={`${isActive('/')?"accent-amber-300": "text-white/50"}`}>About project</Link></li>
        </ul>

        <div className='rounded-md bg-white/90 text-deep-green py-2 px-4'>
              <Link to="/ticket" className='inline-flex items-center gap-2 font-jeju '>MY TICKETS <IoIosArrowRoundForward  size={26}/></Link>
        </div>
    </header>
  )
}

export default Header

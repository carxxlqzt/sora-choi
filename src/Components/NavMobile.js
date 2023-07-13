import React from 'react'
import {Box} from '@chakra-ui/react'
import { FiMenu, FiX } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { NavLinks } from './const/Navlinks'
import '../App.css'
export const NavMobile = () => {
    const [menuClicked, setMenuClicked] = React.useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
    console.log(menuClicked)
  };
  return (
    <Box position='absolute' top='0' h='6vh' w='100vw' zIndex='4' >
    {menuClicked ? (
     <FiX size={50}  onClick={toggleMenuClick} className='iconNavbar' />
   ) : (
     <FiMenu
       size={50}
      className='iconn'
   
       onClick={toggleMenuClick}

     />
   )}
   <ul
       className={
         menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
       }
     >
       {NavLinks.map((item, index) => {
         return (
           <li className="navbar__item" key={index}>
             <Link className="navbar__link" onClick={toggleMenuClick} to={'/'+item.url}>
               {item.name}
             </Link>
           </li>
         );
       })}
     </ul>
   </Box>
  )
}

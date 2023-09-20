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
    <Box position='relative' top='0' minH='8vh' bg='#141414' w='100vw' zIndex='4' p='1rem' display='flex' alignItems='center'>
    {menuClicked ? (
     <FiX size={35}  onClick={toggleMenuClick} className='iconNavbar' />
   ) : (
     <FiMenu
       size={35}
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

import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import dropIcon from '../../assets/down-chevron.png';
import './NavItem.css';

interface NavItemProps {
    title: string;
}

interface DropDownArrowProps {
    isHovering: boolean;
}

function DropDownArrow({isHovering}: DropDownArrowProps) {
    return (
        <img className= {`${isHovering ? 'arrow-up' : ''} ml-1  inline-block  h-5 w-5 transition-transform duration-300`}  src={dropIcon}  alt="dropdown icon" 
        />
    );
}


function NavItem({ title }: NavItemProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
    <button 
      className={`show-underline relative`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {title}
      {isHovering && <DropdownMenu title={title} />}
    </button>
    <DropDownArrow  isHovering={isHovering}/>
    </>

  );
}

export default NavItem;
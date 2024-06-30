import { useState } from 'react';
import DropdownSide from './DropdownSide';
import dropIcon from '../../assets/images/down-chevron.png';
import './NavItemSide.css';

interface NavItemProps {
    title: string;
}

interface DropDownArrowProps {
    isClicked: boolean;
}

function DropDownArrow({isClicked}: DropDownArrowProps) {
    return (
        <img className= {`${isClicked ? 'arrow-up' : ''} ml-1  inline-block  h-5 w-5 transition-transform duration-300`}  src={dropIcon}  alt="dropdown icon" 
        />
    );
}


function NavItemSide({ title }: NavItemProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
    <button 
      className={`show-underline ${isClicked ? 'active' : 'inactive'} relative`}
        onClick={() => setIsClicked(!isClicked)}
    >
      {title}
      <DropDownArrow  isClicked={isClicked}/>
    </button>
    {isClicked && <DropdownSide title={title} />}

    </div>

  );
}

export default NavItemSide;
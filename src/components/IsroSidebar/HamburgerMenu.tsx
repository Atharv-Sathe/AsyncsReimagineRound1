import { Squash as Hamburger } from "hamburger-react";
import Menu from "./Menu";

function HamburgerMenu({ isOpen, setIsOpen} : {isOpen: boolean, setIsOpen: any}) {

    return (
      <div className="text-white">
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        <Menu isOpen={isOpen}/>
      </div>
    );

}

export default HamburgerMenu;
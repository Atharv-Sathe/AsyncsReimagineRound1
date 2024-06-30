import Logo from "../IsroNavbar/Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-screen h-fit bg-white bg-opacity-10 absolute right-0 top-0 flex justify-between items-center z-50 pl-4">
            <Logo />
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </nav>
    );
}

export default Sidebar;
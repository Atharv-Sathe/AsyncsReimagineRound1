import Logo from './Logo';
import NavItems from './NavItems';



function Navbar() {
    return (
        <nav className=' z-10  m-auto w-full gap-16  flex justify-center items-center top-0 fixed'>
            <Logo />
            <NavItems />
        </nav>
    );
}

export default Navbar;
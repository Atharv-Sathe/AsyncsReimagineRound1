import Logo from './Logo';
import NavItems from './NavItems';



function Navbar() {
    return (
        <nav className=' z-10  m-auto w-fit gap-16  flex  items-center'>
            <Logo />
            <NavItems />
        </nav>
    );
}

export default Navbar;
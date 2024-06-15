import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import {motion, useScroll, useMotionValueEvent} from "framer-motion"


function Navbar() {
    const [hidden, setHidden] = useState(false);
    
    const {scrollY} = useScroll();

    // useEffect(() => {
    //     const unsub = scrollY.on("change", (latest) => console.log(latest));
    //     return () => unsub();
    // }, [scrollY])

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        // Check if previous is not undefined before proceeding
        if (typeof previous !== 'undefined') {
            let change = latest - previous;
            if (change > 0) setHidden(true);
            else if (change < 0) setHidden(false);
        }
    });

    return (
        <motion.nav 
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{duration: 0.2, ease: "easeIn"}}
        className=' z-50  m-auto w-full gap-16  flex justify-center items-center top-0 fixed'>
            <Logo />
            <NavItems />
        </motion.nav>
    );
}

export default Navbar;
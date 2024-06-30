import Logo from "../IsroNavbar/Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Check if previous is not undefined before proceeding
    if (typeof previous !== "undefined") {
      let change = latest - previous;
      if (change > 0) setHidden(true);
      else if (change < 0) setHidden(false);
    }
  });

  return (
    // <motion.nav className="w-screen h-fit bg-white bg-opacity-10 absolute right-0 top-0 flex justify-between items-center z-50 pl-4">
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className=" z-50  m-auto w-full gap-16  flex justify-between items-center top-0 fixed glassmorph"
    >
      <Logo />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  );
}

export default Sidebar;

import NavItemSide from "./NavItemSide";


const titles = [
    "About",
    "Activities",
    "Services",
    "Programmes",
    "Resources",
    "Engagements",
];


function Menu({isOpen} : {isOpen: boolean}) {
    return (
        <div className={`absolute top-0 opacity-0 w-full bg-black -z-10 pt-[6em] pb-8
            ${isOpen ? "right-0 opacity-100" : "-right-full"}
            transition-all duration-500 ease-in-out           
        `}>
            <ul className="flex flex-col justify-end gap-4 pl-10 pt-4 border-t-2 border-isro-blue">
                {titles.map((title) => (
                    <li
                        className="flex items-center text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                        key={title}
                    >
                    <NavItemSide title={title}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
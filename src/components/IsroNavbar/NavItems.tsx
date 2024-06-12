import { useEffect, useRef } from 'react';
import NavItem from './NavItem';
import './NavItems.css';

function NavItems() {
  const titles = ['About', 'Activities', 'Services', 'Programmes', 'Resources', 'Engagements'];
  const homeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement; // Assert that e.target is an HTMLElement
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--x', `${x}px`);
      target.style.setProperty('--y', `${y}px`);
    };

    const homeElement = homeRef.current;
    if (homeElement) {
      homeElement.addEventListener('mousemove', handleMouseMove);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        homeElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);


  return (
    <div className='glassmorph flex-col justify-center py-3 px-4 h-fit'>
        <ul className=' text-white text-xl  flex items-center gap-8 h-fit font-ubuntu'>
            <li className='home hover:cursor-pointer' key="Home" ref={homeRef}>Home</li>
            {titles.map(title => <li className='flex items-center'  key={title} ><NavItem  title={title} />
            </li>)}
        </ul>
    </div>
  );
}

export default NavItems;
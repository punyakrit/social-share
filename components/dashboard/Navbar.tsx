"use client"
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
        setIsOpen(!isOpen);
        const styleNav: any = document.getElementsByClassName('sidebar')[0];
        styleNav.style.display = !isOpen ? 'block' : 'none';

    };

    
  
    return (
        <div>
            <button
                onClick={toggleBar}
                className='absolute left-0 top-0 p-4 lg:hidden text-white'>
                {!isOpen ? <AlignJustify /> : <X />}
            </button>

        </div>
    );
}

export default Navbar;




"use client"
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import SideBar from './SideBar';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <div>
            <button 
                onClick={toggleBar} 
                className='absolute left-0 top-0 p-4 lg:hidden text-white'>
                {!isOpen ?<AlignJustify/>:<X/>}
            </button>
            {/* {isOpen && "This is right"} */}

        </div>
    );
}

export default Navbar;

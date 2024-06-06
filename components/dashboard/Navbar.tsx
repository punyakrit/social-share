"use client"
import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const sidebar: any = document.getElementsByClassName('sidebar')[0];
        if (sidebar) {
            sidebar.style.display = isOpen ? 'block' : 'none';
            sidebar.style.color = isOpen ? 'initial' : 'red';
        }
    }, [isOpen]);

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

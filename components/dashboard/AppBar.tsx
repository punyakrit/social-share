"use client"
import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function AppBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
        setIsOpen(!isOpen);
        const styleNav: any = document.getElementsByClassName('sidebar')[0];
        if (styleNav) {
            styleNav.style.display = !isOpen ? 'block' : 'none';
            styleNav.style.position = window.innerWidth <= 1024 ? 'fixed' : 'relative';
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const styleNav: any = document.getElementsByClassName('sidebar')[0];
            if (styleNav) {
                if (window.innerWidth > 1024) {
                    styleNav.style.display = 'block';
                    styleNav.style.position = 'relative';
                } else {
                    styleNav.style.display = isOpen ? 'block' : 'none';
                    styleNav.style.position = isOpen ? 'fixed' : 'relative';
                }
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    return (
        <div>
            <button
                onClick={toggleBar}
                className='fixed left-0 top-1 p-5 lg:hidden text-white z-50'>
                {!isOpen ? <AlignJustify /> : <X />}
            </button>
        </div>
    );
}

export default AppBar;

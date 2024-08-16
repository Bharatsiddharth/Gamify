import React, { useState } from 'react';
import Logo from "../../assets/logo.svg";
import MenuBar from './menuBar';
import menuBar from './menuBar';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
          <div className='fixed w-full z-10'>
          <div className='flex justify-between items-center  text-white p-3 px-10 relative overflow-hidden'>
                <img className='h-10' src={Logo} alt="Logo" />
                <div className='flex justify-center items-center gap-5 z-[50]'>
                    <button className='py-3 px-6 bg-[#57BA5E] rounded-full text-xl font-semibold'>
                        Discuss Projects <i className="ri-arrow-right-line"></i>
                    </button>
                    <i onClick={handleClick} className={`text-3xl ri-menu-fold-line cursor-pointer ${menuOpen ? 'text-[#57BA5E]' : 'text-white'}`}></i>
                </div>

                {/* Menu Bar */}
               <MenuBar menuOpen={menuOpen}  />
            </div>
          </div>
        </>
    );
}

export default Navbar;
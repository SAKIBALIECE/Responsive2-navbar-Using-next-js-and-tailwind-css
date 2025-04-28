"use client";

import { MdCancel } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link"; // 

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-gray-600 h-[70px] text-white flex relative'>
      <div className="flex justify-between items-center w-full md:px-12 px-2">
        <h1 className='text-2xl'>SAKIB ALI</h1>

        {/* Mobile Menu Icon */}
        <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
          {open ? <MdCancel /> : <CgDetailsMore />}
        </div>

        {/* Desktop Menu */}
        <ul className='gap-8 font-semibold md:flex hidden'>
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/about"> About</Link>
            </li>
          <li>
            <Link href="/services"> Services</Link>
            </li>
          <li>
            <Link href="/contact"> Contact</Link>
            </li>
        </ul>

        {/* Mobile Menu */}
        <ul className={`absolute top-[70px] w-full text-center leading-9 font-semibold bg-gray-700 md:hidden transition-all duration-300
          ${open ? 'left-0' : 'left-[-100%]'}
         duration-700`}>
          <li  onClick={() => setOpen(false)}>
         <Link href="/"> Home</Link>
       </li>
       <li onClick={() => setOpen(false)}>
         <Link href="/about"> About</Link>
         </li>
       <li onClick={() => setOpen(false)}>
         <Link href="/services"> Services</Link>
         </li>
       <li onClick={() => setOpen(false)}>
         <Link href="/contact"> Contact</Link>
         </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;

"use client"
import { navLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

function Navbar() {

  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  return (
    <header className=' bg-bgColor   text-center  mx-auto  '>
      <nav className='flex  items-center justify-between md:container mx-auto '>
        {/* Logo Part */}
        <div className="cursor-pointer flex items-center justify-center h-16">
          <Link href='/' >
            <Image
              src="/Logo3.png"
              alt="logo"
              width={100}
              height={80}
            />
          </Link>
        </div>
        {/* Links Part */}
        <div className="hidden md:flex items-center gap-4  " >
          {
            navLinks.map((link, key) => {
              const isActive = pathName.trim().startsWith(link.path);
              return (
                <Link href={link.path} key={key} className={isActive ? ("text-lg font-semibold text-mainColor hover:text-mainColor transition duration-200 ease-in ") : ("text-lg font-semibold text-white hover:text-mainColor transition duration-200 ease-in ")}>
                  {link.title}
                </Link>
              )
            }

            )
          }
        </div>
        <Link className='hover:scale-125 transition-all duration-500' href='https://github.com/barmajli2' target='_blank'>
          <Image
            src='/social/github.png'
            alt="logo"
            width={50}
            height={50}
            className="w-[35px] "

          />
        </Link>
        {/* Mopail menu Part */}
        {
          !open ? (
            <div className="md:hidden cursor-pointer ">
              <Image
                src="/W-open.png"
                alt=''
                width={35}
                height={35}
                className='me-4'
                onClick={() => setOpen(true)}
              />
            </div>) :
            (
              <div className="md:hidden cursor-pointer ">
                <Image
                  src="/close.png"
                  alt=''
                  width={35}
                  height={35}
                  className='me-4'
                  onClick={() => setOpen(false)}
                />
              </div>)
        }
        {open && <div className="bg-bgColor text-white absolute md:hidden z-10 left-0 top-16 h-[calc(100vh-4rem)] w-full flex items-center justify-center flex-col gap-5 text-2xl text-center">
          {
            navLinks.map((item, key) => (
              <Link href={item.path} key={key} onClick={() => setOpen(false)} className=' w-full pb-3 hover:text-gray-200  hover:shadow-md'>{item.title}</Link>
            ))}
        </div>
        }
      </nav>
    </header>
  )
}

export default Navbar
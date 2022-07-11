import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png'
import React from 'react'

export default function Header() {
  return (
    <header className='fixed z-20 min-w-full text-sky-100'>
    <nav>
      <div className='flex w-11/12 mx-auto justify-between pt-4 items-center'>
        <div className='cursor-pointer'>
          <Link href='/' passHref>
            <Image src={logo} alt='mockup' width={110} height={110} />
          </Link>
        </div>
        <div className='flex h-10'>
          <Link href='/' passHref>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100 '>
              Intro
            </p>
          </Link>
          <Link href='' passHref>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              clubhouse
            </p>
          </Link>
          <Link href='/team' passHref>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              team
            </p>
          </Link>
          <Link href='/contact' passHref>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              contact us
            </p>
          </Link>
          <a href='https://twitter.com' rel='noreferrer' target='_blank'>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              twitter
            </p>
          </a>
          <a href='https://discord.com' rel='noreferrer' target='_blank'>
            <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              discord
            </p>
          </a>
          <a href='https://magiceden.io' rel='noreferrer' target='_blank'>
            <p className='uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
              me
            </p>
          </a>
        </div>
      </div>
    </nav>
  </header>
  )
}


       
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png'
import twitter from '../public/icons/twitter.svg'
import discord from '../public/icons/discord.svg'
import React from 'react'

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";

export default function Header() {
  return (
    <header className='fixed z-20 min-w-full text-sky-100'>
    <nav>
      <div className="hidden md:block">
          <div className='flex w-11/12 mx-auto justify-between pt-4 items-center'>
          <div className='cursor-pointer'>
            <Link href='/' passHref>
              <Image src={logo} alt='mockup' width={110} height={110} />
            </Link>
          </div>
          <div className='flex h-10'>
            <Link href='/' passHref>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100 '>
                Intro
              </p>
            </Link>
            <Link href='' passHref>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
                clubhouse
              </p>
            </Link>
            <Link href='/team' passHref>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
                team
              </p>
            </Link>
            {/* <Link href='/contact' passHref>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100'>
                contact us
              </p>
            </Link> */}
            <a href='https://twitter.com/toasty_friends' rel='noreferrer' target='_blank'>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100 flex items-center justify-center'>
              <Image src={twitter} alt='mockup' width={25} height={25} className="text-white"/>
              </p>
            </a>
            <a href='https://discord.gg/EvCeZ3grnf' rel='noreferrer' target='_blank'>
              <p className='mr-2 uppercase px-3 py-2  font-bold rounded bg-gradient-to-r  from-blue-700 via-blue-600 to-blue-700 hover:bg-gradient-to-r  hover:from-neutral-700 hover:via-neutra-600 hover:to-neutral-700 cursor-pointer hover:text-sky-100 duration-500 scale-95 hover:scale-100 flex items-center justify-center'>
              <Image src={discord} alt='mockup' width={25} height={25} className="text-white"/>
              </p>
            </a>
            <div>
              <p className='uppercase px-3 py-2  font-bold rounded bg-gray-700'>
                me
              </p>
            </div>
          </div>
          </div>
      </div>
        <div className="block md:hidden py-2 px-4">
            <div className="flex justify-between items-center">
              <div className='cursor-pointer'>
                <Link href='/' passHref>
                  <Image src={logo} alt='mockup' width={80} height={80} />
                </Link>
              </div>
              <Menu>
                  <MenuHandler className="bg-neutral-900 text-neutral-200 border-2 border-sky-700 text-sm">
                    <Button>MENU</Button>
                  </MenuHandler>
                  <MenuList className="bg-neutral-900 text-neutral-200 -ml-2 rounded-lg py-4 ">
                <MenuItem className="mb-2 font-bold underline">
                  <Link  href="/" passHref>
                    <a>INTRO</a>
                  </Link>
                  
                </MenuItem>
                <MenuItem className="mb-2 font-bold underline">
                  <Link  href="/" passHref>
                    <a>CLUBHOUSE</a>
                  </Link>
                  
                </MenuItem>
                <MenuItem className="mb-2 font-bold underline">
                  <Link href="/team" passHref>
                    <a>TEAM</a>
                  </Link>
                </MenuItem>
                <div className="flex items-center justify-between px-2">
                <MenuItem>
                  <a href='https://twitter.com/toasty_friends' rel='noreferrer' target='_blank'>
                    <Image src={twitter} alt='mockup' width={20} height={20} className="text-gray-900"/>
                  </a>
                </MenuItem><MenuItem className="font-bold">
                  <a href='https://discord.gg/EvCeZ3grnf' rel='noreferrer' target='_blank'>
                      <Image src={discord} alt='mockup' width={20} height={20} className="text-white" />
                  </a>
                  </MenuItem>
                  <MenuItem className="font-bold text-lg">
                  <Link href="/" passHref>
                    <a>ME</a>
                  </Link>
                </MenuItem>
                  </div>
                </MenuList>
                
              </Menu>
            </div>
      </div>  
    </nav>
  </header>
  )
}    
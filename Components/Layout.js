import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.png'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Toasty Friends' : 'Toasty Friends'}</title>
        <meta name='description' content='Solana Powerful Tools' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between bg-gradient-to-tl from-black via-gray-900 to-black text-sky-100'>
        <header className='fixed z-20 min-w-full '>
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
        <main className='w-11/12 mx-auto items-center justify-center'>
          {children}
        </main>
        <footer className='w-11/12 mx-auto text-center font-semibold'>
          Copyright &copy; Toasty Friends 2022
        </footer>
      </div>
    </>
  )
}

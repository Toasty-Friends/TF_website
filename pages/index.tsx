import Image from 'next/image'
import Head from 'next/head'

// import profilePic from '../public/vercel.svg'
import hero from '../public/evilsunny.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Toasty Friends</title>
        <meta name='description' content='Solana Powerful Tools' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <Header />
      <main className=' mx-auto items-center flex min-h-screen flex-col justify-between bg-gradient-to-tl from-black via-gray-900 to-black text-sky-100'>
        <section className='pt-16 text-sky-100'>
        
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white'>
              Powerful tool for solana NFT
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              maxime ea odit sint culpa optio! Fugit accusamus repellendus
              laboriosam, ipsum assumenda, ea animi illum quos voluptatem
              inventore debitis enim quo.
            </p>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
            >
              Roadmap
            </a>
            <a
              href='#'
              className='text-sky-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Clubhouse
            </a>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
            <Image
              src={hero}
              alt='mockup'
              width={400}
              height={400}
              className='rounded'
            />
          </div>
        </div>
        </section>
        <Footer />
      </main>
      
    </>
  )
}

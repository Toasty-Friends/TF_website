// import Image from 'next/image'
import Head from 'next/head'

// import profilePic from '../public/vercel.svg'
// import hero from '../public/evilsunny.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
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
        <div>Contact</div>
        </section>
        <Footer />
      </main>
      
    </>
  )
}

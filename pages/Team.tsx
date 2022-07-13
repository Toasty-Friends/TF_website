import Image from 'next/image'
import Head from 'next/head'
import toaster from '../public/toastr.jpg'
import dementez from '../public/dem.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Team() {
  return (
    <>
      <Head>
        <title>Team - Toasty Friends</title>
        <meta name='description' content='Solana Powerful Tools' />
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      <Header />
      <main className='min-h-screen bg-gradient-to-tl from-black via-gray-900 to-black text-neutral-200'>
        <h1 className="text-center text-3xl font-bold pt-28 pb-8">Toasty Team</h1>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center mb-5 text-center gap-4">
          <div className="md:w-1/2 p-4 border-2 rounded-lg">
            <h1 className="mb-3 text-2xl font-semibold">The Lost Toastr</h1>
            <Image
              src={toaster}
              alt='toaster founder'
              width={300}
              height={300}
              className='rounded'
            />
            <p className='mb-2'>Hello Toasty Fam,</p>
            <p className='mb-2'>I am The Lost Toastr, or Josh wich ever you prefer. I am the lead developer and founder of Toasty Friends.</p>
            <p>I am a computer science major graduating with focus in game development. I have been into crypto since a young age and followed bitcoin since it was below $1000. Around 2018 i got back into it and watched the market climb from 3k to almost 70k! There is mine. </p>
          </div>
          <div className="md:w-1/2 p-4 border-2 rounded-lg">
            <h1 className="mb-3 text-2xl font-semibold">Dementez</h1>
            <Image
              src={dementez}
              alt='toaster marketing'
              width={300}
              height={300}
              className='rounded'
            />
            <p className='mb-2'>Greeting Toasty Fam, I am Christian Cuevas</p>
            <p>I am 36 years old and reside in Orlando, Florida. Past experience includes management, marketing and hospitality as a corporate veterinary HM. Currently working on Toast Friends and 3a Investments. Looking to create and be a part if community driven project. Pass times includes gaming with my kids and enjoying the Florida outdoors with my family. Have been in Defi space for about 3 years. Specifically SOL NFT space for over a year. </p>
          </div>
        </div>
        <Footer />
      </main>
      
    </>
  )
}
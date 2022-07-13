import Image from 'next/image'
import Head from 'next/head'

// import profilePic from '../public/vercel.svg'
import hero from '../public/evilsunny.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
 

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModale, setShowModale] = React.useState(false);
  const [showModali, setShowModali] = React.useState(false);
  return (
    <>
      <Head>
        <title>Toasty Friends</title>
        <meta name='description' content='Solana Powerful Tools' />
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
      </Head>
      <Header />
      <main className=' mx-auto w-full items-center flex min-h-screen flex-col justify-between bg-gradient-to-tl from-black via-gray-900 to-black text-sky-100'>
        <section className='w-11/12 mx-auto pt-36 md:pt-20 text-sky-100 items-center justify-between'>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7 px-4'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white'>
              Powerful tool for solana NFT
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify'>
            Here we are a project built by the community for the community. We aim for complete transparency, by showing our actions during each step of our journey. The goal is to bring together like-minded individuals and help each other.
            </p>
            <a
              href='#roadmap'
              className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
            >
              Roadmap
            </a>
            <a
              href='#' aria-label='coming soon'
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
        <section id='roadmap' className='min-h-screen w-11/12 mx-auto'>
          <div className='relative mt-36 border-4 border-gray-200 px-4 pt-6 md:px-8 md:pt-12 md:pb-4 rounded-lg mb-5'>
            <h1 className="absolute -top-5 right-10 text-3xl bg-black px-1 ">ROADMAP</h1>
            <div className="flex -mx-1 mb-5">
                <div className="w-1/2 px-1">
                    <button type="button"
                  onClick={() => setShowModal(true)}
                  className=" w-full block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-gradient-to-br from-slate-800 to-blue-800"
                >
                  <div className="h-24"></div>
                  <h3 className="text-lg font-bold text-white leading-tight flex">PHASE 1</h3>
                  
                </button>
                {showModal ? (
        <>
          <div
            className="justify-center px-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl" >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 text-neutral-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 md:p-5 border-b border-solid border-sky-700 rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold">
                    Phase 1
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 md:p-6 flex-auto ">
                  <p className="my-4 text-neutral-300 text-sm md:text-lg leading-relaxed">
                    <p className="text-justify">1. Creation of Toasty Friends PFP</p>
                    <p className="text-justify">2. DAO tool implementation in discord</p>
                    <p className="text-justify">3. Launching the project to the public - We will create a Toasty Friends community through social media, discord, and word to mouth</p>
                    <p className="text-justify">4. Play mini games and challenges for winners to gain access to exclusive roles. Benefits will include: <br /> - Pre-mint access to DAO tools <br />- Possible free mint tokens</p>
                    <p className="text-justify">5. Finalize collection and set rarities</p>
                    <p className="text-justify">6. Minting 4444 Toasty Friends on the Solana blockchain</p>
                  <p className="text-justify">7. Website with wallet connection & smart contracts</p>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 md:p-6 border-t border-solid border-sky-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
                ) : null}

                <button type="button"
                  onClick={() => setShowModale(true)}
                  className=" w-full block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-gradient-to-br from-slate-800 to-blue-800">
                        <div className="h-32"></div>
                        <h3 className="text-lg font-bold text-white leading-tight flex">PHASE 2</h3>
                </button>
                {showModale ? (
        <>
          <div
            className="justify-center px-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModale(false)}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl" >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 text-neutral-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 md:p-5 border-b border-solid border-sky-700 rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold">
                    Phase 2
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModale(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 md:p-6 flex-auto ">
                  <p className="my-4 text-neutral-300 text-sm md:text-lg leading-relaxed">
                    <p className="text-justify">8. Staking for $CRUMB released</p>
                    <p className="text-justify">9. Clubhouse/Bot integration on website</p>
                    <p className="text-justify">10. Expansion of DAO tools, in-house and bought</p>
                    <p className="text-justify">11. Onboarding of a full time NFT caller</p>
                    <p className="text-justify">12. Begin creation of Metaverse</p>
                    <p className="text-justify">13. Integrate clubhouse/bot into Metaverse</p>
                    <p className="text-justify">14. Early beta testing of Metaverse for Toasty Friends holders</p>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 md:p-6 border-t border-solid border-sky-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModale(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
                ) : null}
              
        </div>
                
                <div className="w-1/2 px-1">
                <button type="button"
                  onClick={() => setShowModali(true)}
                  className="w-full block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-gradient-to-br from-slate-800 to-blue-800">
                        <div className="h-32"></div>
                        <h3 className="text-lg font-bold text-white leading-tight flex">PHASE 3</h3>
                </button>
                {showModali ? (
        <>
          <div
            className="justify-center px-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModali(false)}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl" >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 text-neutral-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 md:p-5 border-b border-solid border-sky-700 rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold">
                    Phase 3
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModali(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 md:p-6 flex-auto ">
                  <p className="my-4 text-neutral-300 text-sm md:text-lg leading-relaxed">
                    <p className="text-justify">15. Full Metaverse reveal with roadmap and breakdown</p>
                    <p className="text-justify">16. Seamless integration of benifits across Discord, Web, Mobile, and Metaverse</p>
                    <p className="text-justify">17. Personal rooms released, and addition clubhouses for partnered projects</p>
                    <p className="text-justify">18. Mini-game integration for Metaverse(FPS, Arcade, Trivia, ETC.)</p>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 md:p-6 border-t border-solid border-sky-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModali(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
                ) : null}
                    <button className="w-full group block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-gradient-to-br from-slate-800 to-blue-800">
                      <div className="h-24"></div>
                      <div className="md:flex">
                        <h3 className="text-lg font-bold text-white leading-tight flex mr-2">PHASE 4</h3>
                        <h3 className="text-lg font-bold text-red-600 leading-tight flex opacity-0 group-hover:opacity-100">COMING SOON..</h3>
                      </div>    
                    </button>
                </div>
            </div>
          </div>
          <Footer />
        </section>
        
      </main>
      
    </>
  )
}

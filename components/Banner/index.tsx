import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";

const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="home-section">
            <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:4}} className='arrowOne'></motion.div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5}} className='arrowTwo'></motion.div>
                        <motion.div initial={{x: "-100vw"}} animate={{x:0}} transition={{duration: 1, delay:3.5}} className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                Buy,  Sell & Recieve <br /> Digital Assets
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Welcome to CryptoMania! We make trading cryptocurrencies <br/> easy and enjoable. Whether you&apos;re an experienced trader or <br/> new to the crypto market, we provide everything you need to <br/> get the most out of your trading journey. Our user-friendly <br/> platform is designed with you in mind - making trading <br/> simple and secure. Start your crypto trading journey today <br/> with CryptoMania.</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <Button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-[#BD24DF] to-[#04B273] hover:bg-gradient-to-l from-[#BD24DF] to-[#04B273]" rounded-[20px] mr-6'>Get Started</Button>
                                <Button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />How it works</Button>
                            </div>
                        </motion.div>

                        <div className='col-span-5 lg:-m-48'>
                        <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5.5}} className='arrowThree'></motion.div>
                        <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5.9}} className='arrowFour'></motion.div>
                        <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5.8}} className='arrowFive'></motion.div>
                            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:3.5}} className='inline-block'><Image src="/images/Banner/banner.png" alt="nothing" width={1013} height={760} /></motion.div>
                            <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5}} className='arrowSix'></motion.div>
                            <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5.5}} className='arrowSeven'></motion.div>
                            <motion.div initial={{x:"-100vw"}} animate={{x: 0}} transition={{duration:0.4, delay:5.3}} className='arrowEight'></motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

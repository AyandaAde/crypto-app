import Image from 'next/image';
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Create Account',
        subheading: "Creating an account on our website is quick and easy...",
        hiddenpara: "Simply click on the Sign Up button located on the home page, enter your information and click Create Account. You'll receive an email with a confirmation link that you must click on to verify your account.",
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Fund Your Account',
        subheading: "We understand how important it is for you to fund your account...",
        hiddenpara: " in a timely manner. That's why we have a variety of convenient payment options available from direct bank transfers and e-transfers, to Visa and Mastercard debit and credit cards. We also provide instant bank transfers to help make the process even faster.",
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Exchange Crypto',
        subheading: "Select your preferred trading pair, and start exchanging today...",
        hiddenpara: "Your cryptocurrency will be securely stored on your account and can be used whenever you want. Try it now and see why we are the go-to exchange for all your crypto needs.",
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <motion.h3 initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{ duration:1}} className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it works</motion.h3>
                    <motion.p initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1}} className='text-white md:text-lg font-normal leading-8'>Trading cryptocurrencies has never been easier! Our website allows you to easily search <br/> and compare cryptocurrency prices across multiple markets and buy or sell <br/> digital assets quickly and securely. All you have to do is open an account, fund <br/>  it, and start trading!</motion.p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <motion.div initial={{opacity:0, x:"-25vw"}} whileInView={{opacity: 1, x:0}} transition={{ delay:(i*0.5)}} className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-xl md:text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            
                            <p className='text-[12px] sm:text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-[12px] sm:text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </motion.div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;

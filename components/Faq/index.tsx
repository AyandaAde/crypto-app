import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import {motion} from "framer-motion";

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is cryptocurrency?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },
    {
        heading: "2. Can cryptocurrency be converted to cash?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },
    {
        heading: "3. How long should you hold cryptocurrency?",
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    },

]

const Faq = () => {
    const fadeUp = {
        visible: {opacity:1, y:0},
        hidden: {opacity:0, y:200},
    }
    return (
        <div className="my-20 px-6" id="faq-section">
            <motion.h3 initial="hidden" whileInView="visible" variants={fadeUp} transition={{duration:1}}  className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked Questions</motion.h3>
            <motion.p  initial="hidden" whileInView="visible" variants={fadeUp} transition={{duration:1, delay:0.2}} className="text-center lg:text-lg font-normal text-bluish">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry standard dummy text ever since the 1500s,</motion.p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{duration: 1}} className="mx-auto w-full max-w-5xl rounded-2xl bg-[#050A0A] py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:2}} className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </motion.div>

                </div>
            </div>

        </div>
    )
}

export default Faq;

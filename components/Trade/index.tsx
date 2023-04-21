import Image from "next/image";
import { motion } from "framer-motion";

const Trade = () => {
    const fadeUp = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
    }
    const fadeRight = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "-9vw" }
    }
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <motion.div initial="hidden" whileInView="visible" transition={{ duration: 1 }} variants={fadeUp} className="inline-block">
                    <Image src={'/images/Trade/macbook.png'} alt="macBook-image" width={787} height={512} />
                </motion.div>

                {/* Column-2 */}

                <div>
                    <motion.h3 initial="hidden" whileInView="visible" transition={{ duration: 1 }} variants={fadeUp} className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">Trade Anywhere <br /> Any time</motion.h3>
                    <motion.p initial="hidden" whileInView="visible" transition={{ duration: 1 }} variants={fadeUp} className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</motion.p>
                    <div className="flex justify-between">
                        <motion.div className="inline-block" initial="hidden" whileInView="visible" variants={fadeRight} transition={{ duration: 1, delay: 0.5 }}><Image src={'/images/Trade/mac.svg'} alt="macOS-image" width={61} height={105} /></motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2.7}} className="invisible sm:visible verticalLine"></motion.div>
                        <motion.div className="inline-block" initial="hidden" whileInView="visible" variants={fadeRight} transition={{ duration: 1, delay: 1 }}> <Image src={'/images/Trade/appstore.svg'} alt="appstore-image" width={80} height={105} /></motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2.7}} className="invisible sm:visible verticalLine"></motion.div>
                        <motion.div className="inline-block" initial="hidden" whileInView="visible" variants={fadeRight} transition={{ duration: 1, delay: 1.5 }}> <Image src={'/images/Trade/windows.svg'} alt="windows-image" width={80} height={105} /></motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2.7}} className="invisible sm:visible verticalLine"></motion.div>
                        <motion.div className="inline-block" initial="hidden" whileInView="visible" variants={fadeRight} transition={{ duration: 1, delay: 2 }}> <Image src={'/images/Trade/android.svg'} alt="android-image" width={71} height={105} /></motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;


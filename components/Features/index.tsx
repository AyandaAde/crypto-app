import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Secure storage',
        subheading: 'We lake data security and privacy very seriously',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Free to use',
        subheading: 'Top notch crypto portfolio traking at no cost',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time price data',
        subheading: 'Updating 24/7 using price data form the biggest exchanges',
    },
]

const Features = () => {
    return (
        <Box id="features-section">
            <Grid2 container className="relative gap-1 my-[40px] flex place-items-center">
            <div className="radial-bg hidden lg:block"></div>
                <Grid2 className="w-[550px] md:ml-[20px]">
                    <motion.div initial={{opacity: 0, x:"-25vw"}} whileInView={{opacity:1, x:0}} transition={{duration: 1}} className="inline-block">
                    <h3 className="feature-font text-xl font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The most trusted cryptocurrency platform</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                    </motion.div>
                </Grid2>
                        {featuresdata.map((items, i) => (
                            <Grid2 className="mx-auto" key={i}>
                                <motion.div initial={{opacity:0, y:200}} whileInView={{opacity:1, y:0}} transition={{duration:1}} className="w-[250px] mx-auto md:m-[5px] bg-[#050A0A] py-10 pr-12 pl-6 rounded-lg inline-block">
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                                </motion.div>
                            </Grid2>
                        ))}
            </Grid2>
        </Box>
     
 
       
    )
}

export default Features;

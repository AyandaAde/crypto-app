import Image from "next/image";
import Link from "next/link";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Exchange', 'Features', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/" },
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]


const footer = () => {
  return (
    <Box className="relative">
      <div className="radial-bg hidden lg:block"></div>
      <Grid2 container className="mx-auto mt-64 pb-16 px-4 sm:px-6 lg:px-8 gap-y-10 md:gap-x-16 xl:gap-x-10">
        <Grid2 className="mx-auto w-[280px] md:w-[500px]">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          <Image
            width={150}
            height={150}
            className="block h-12 w-20px mb-4"
            src={'/images/Logo/logo.svg'}
            alt="CryptoMania-Logo"
          /></motion.div>
          <motion.h3 initial={{opacity:0, y:200}} whileInView={{opacity:1, y:0}} transition={{duration:1}} className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> Cryptocurrency is a type of virtual currency that uses cryptography to secure transactions that are digitally recorded on a distributed ledger, such as a blockchain.</motion.h3>
          <div className='flex gap-4'>
            {socialLinks.map((items, i) => (
              <motion.div key={i} initial={{opacity:0, x:"-8vw"}} whileInView={{opacity:1, x:0}} transition={{duration:1, delay:(i*0.5)}} className="inline-block"><Link href={items.href} key={i}><Image width={33} height={33} src={items.imgsrc} alt={items.imgsrc} className='footer-icons hover:animate-bounce' /></Link></motion.div>
            ))}
          </div>

        </Grid2>

        <Grid2 className="mx-auto w-[200px]">
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <motion.p initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration: 1}} className="text-white text-xl font-medium mb-9">{product.section}</motion.p>
              <motion.ul>
                {product.link.map((link: string, index: number,) => (
                  <motion.li initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration: 1, delay: (index*0.5)}} key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </Grid2>

        <Grid2 className="mx-auto w-[250px]">
          <motion.h3 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1}} className="text-white text-xl font-medium mb-9">Contact Us</motion.h3>
          <motion.h4 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1, delay:0.5}} className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(406) 555-012</motion.h4>
          <motion.h4 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1, delay:1}} className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />tim.jennings@example.com</motion.h4>
          <motion.h4 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1, delay:1.5}} className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Elgin St. Celina, Delaware 10299</motion.h4>
        </Grid2>


      </Grid2>
      {/* All Rights Reserved */}

      <motion.div initial={{opacity:0, scaleX:0}} whileInView={{opacity:1, scaleX:1}} transition={{duration:1, delay:1.5}} className='py-5 px-4 border-t border-t-lightblue'>
        <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}}  transition={{duration:1, delay:2}} className='text-center text-offwhite'>Copyright {new Date().getFullYear()} - Ayanda Adegbola</motion.h3>
      </motion.div>




    </Box>
  )
}

export default footer;


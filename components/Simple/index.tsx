import * as React from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import OutlinedCard from "../card";
import {motion} from "framer-motion";

const Simple = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fadeUp = {
        hidden: {opacity:0, y:200},
        visible: {opacity:1, y:0},
    }
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className="simple-bg relative">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
                <motion.h3 initial="hidden" whileInView="visible" transition={{duration:1}} variants={fadeUp} className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">A simple, secure way to buy <br /> and sell cryptocurrency</motion.h3>
                <motion.p initial="hidden" whileInView="visible" transition={{duration:1}} variants={fadeUp} className="text-center text-bluish text-lg font-normal mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> has been the industry</motion.p>
                <div className="flex justify-center ">
                <Box className="inline-block">
           <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{duration:1}} className="inline-block"><Button onClick={handleOpen} className="bg-gradient-to-r from-[#BD24DF] to-[#04B273] hover:bg-gradient-to-l from-[#BD24DF] to-[#04B273] text-xl font-semibold text-white py-4 px-6 lg:px-12 rounded-[20px]" variant="contained"
            >
                Connect Wallet
            </Button></motion.div> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <OutlinedCard />
            </Modal>
        </Box>
                </div>
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </motion.div>
    )
}

export default Simple;

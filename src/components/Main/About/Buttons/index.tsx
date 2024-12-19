import { Button } from '@mui/material'
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Buttons(){
    return (
        <motion.div 
        className="buttons"
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{ type: "spring", stiffness: 100 }}
        >
            <Button variant="outlined">
                <Link href="https://github.com/gabriel-waltmann" target="_blank" >Github</Link>
            </Button>
            <Button variant="outlined">
                <Link href='https://www.linkedin.com/in/gabrielwaltmann' target="_blank">Linkedin</Link>
            </Button>
        </motion.div>
    )
}
import Form from "./Form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const style = {
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
    return (
        <motion.div
            ref={ref}
            style={style}
            id="contact"
        >
            <h2>Contact</h2>
            <Form />
        </motion.div>
    )
}
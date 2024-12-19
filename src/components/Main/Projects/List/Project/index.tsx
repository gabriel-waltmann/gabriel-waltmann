import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IProject } from '@/types/Projects';

type TProps = Readonly<{ project: IProject }>
export default function Project(props: TProps) {
    const { heading, github, description, host, image } = props.project;
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const bg = {
        backgroundImage: `url(${image.url})`,
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
    }
    return <motion.li
            key={heading}
            style={bg}
            ref={ref}
        >
            <article>
                <h2>{heading}</h2>

                <p>{description}</p>
                <div className="buttons">
                    {github && <Button
                        variant="contained" 
                        aria-label={heading} 
                    >
                        <Link href={github} target='_blank'>
                            <GitHubIcon />
                        </Link>
                    </Button>}

                    {host && <Button 
                    variant="contained"
                    aria-label={heading}
                    >
                        <Link href={host} target="_blank" >
                            <LanguageIcon />
                        </Link>
                    </Button>}
                </div>
            </article>
    </motion.li>
}
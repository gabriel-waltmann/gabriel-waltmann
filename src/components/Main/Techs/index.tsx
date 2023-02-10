import { List, ListItem } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Axios from "public/assets/icons/Axios";
import Bootstrap from "public/assets/icons/Bootstrap";
import Css from "public/assets/icons/Css";
import Express from "public/assets/icons/Express";
import Figma from "public/assets/icons/Figma";
import Firebase from "public/assets/icons/Firebase";
import Git from "public/assets/icons/Git";
import Github from "public/assets/icons/Github";
import HTML from "public/assets/icons/HTML";
import JS from "public/assets/icons/JS";
import JWT from "public/assets/icons/JWT";
import MaterialUI from "public/assets/icons/MaterialUI";
import MongoDB from "public/assets/icons/MongoDB";
import Netlify from "public/assets/icons/Netlify";
import Next from "public/assets/icons/Next";
import Node from "public/assets/icons/Node";
import Notion from "public/assets/icons/Notion";
import NPM from "public/assets/icons/NPM";
import Sass from "public/assets/icons/Sass";
import StyledComponents from "public/assets/icons/StyledComponents";
import Tailwind from "public/assets/icons/Tailwind";
import TS from "public/assets/icons/TS";
import Vercel from "public/assets/icons/Vercel";
import VSCode from "public/assets/icons/VSCode";

export default function Techs(){
   
    return(
        <motion.section
        id="techs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
>
            <h2 className="techsTitle">Tecnologias</h2>

            <List >
                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://www.typescriptlang.org/'}
                    >
                        <TS/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
                    >
                        <JS/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/css'}
                    >
                        <Css/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://sass-lang.com/#'}
                    >
                        <Sass/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://styled-components.com/'}
                    >
                        <StyledComponents/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/html'}
                    >
                        <HTML/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://mui.com/'}
                    >
                        <MaterialUI/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://nodejs.org/en/'}
                    >
                        <Node/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://mongodb.com/'}
                    >
                        <MongoDB/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://www.npmjs.com/#'}
                    >
                        <NPM/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://getbootstrap.com/'}
                    >
                        <Bootstrap/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://nextjs.org/'}
                    >
                        <Next/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://jwt.io/'}
                    >
                        <JWT/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://firebase.google.com/'}
                    >
                        <Firebase/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://www.expressjs.com/'}
                    >
                        <Express/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://axios-http.com/'}
                    >
                        <Axios/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://git-scm.com/'}
                    >
                        <Git/>
                    </Link>
                </ListItem>

                <ListItem >
                    <Link
                    target='_blank'
                    href={'https://tailwindui.com/'}
                    >
                        <Tailwind/>
                    </Link>
                </ListItem>

            </List>

            <h2 className="toolsTitle">Ferramentas</h2>

            <List >
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://www.notion.so/'}
                    >
                        <Notion/>
                    </Link>

                </ListItem>
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://code.visualstudio.com/'}
                    >
                        <VSCode/>
                    </Link>

                </ListItem>
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://github.com/GabrielWaltmann/'}
                    >
                        <Github/>
                    </Link>

                </ListItem>
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://vercel.com/'}
                    >
                        <Vercel/>
                    </Link>

                </ListItem>
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://netlify.com/'}
                    >
                        <Netlify/>
                    </Link>

                </ListItem>
                <ListItem>
                    <Link
                    target='_blank'
                    href={'https://figma.com/'}
                    >
                        <Figma/>
                    </Link>

                </ListItem>
            </List>
        </motion.section>
    )
}
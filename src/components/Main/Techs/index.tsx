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


const techButtons = [
    { href: 'https://www.typescriptlang.org/', Icon: <TS /> },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', Icon: <JS /> },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', Icon: <TS /> },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/css', Icon: <Css /> },
    { href: 'https://sass-lang.com/', Icon: <Sass /> },
    { href: 'https://styled-components.com/', Icon: <StyledComponents /> },
    { href: 'https://developer.mozilla.org/en-US/docs/Web/html', Icon: <HTML /> },
    { href: 'https://mui.com/', Icon: <MaterialUI /> },
    { href: 'https://nodejs.org/', Icon: <Node /> },
    { href: 'https://mongodb.com/', Icon: <MongoDB /> },
    { href: 'https://www.npmjs.com/#', Icon: <NPM /> },
    { href: 'https://getbootstrap.com/', Icon: <Bootstrap /> },
    { href: 'https://nextjs.org/', Icon: <Next /> },
    { href: 'https://tailwindui.com/', Icon: <Tailwind /> },
    { href: 'https://git-scm.com/', Icon: <Git /> },
    { href: 'https://axios-http.com/', Icon: <Axios /> },
    { href: 'https://www.expressjs.com/', Icon: <Express /> },
    { href: 'https://firebase.google.com/', Icon: <Firebase /> },
    { href: 'https://jwt.io/', Icon: <JWT /> },
    { href: 'https://nextjs.org/', Icon: <Next /> },
    { href: 'https://getbootstrap.com/', Icon: <Bootstrap /> },
    { href: 'https://www.npmjs.com/#', Icon: <NPM /> },
    { href: 'https://mongodb.com/', Icon: <MongoDB /> },
    { href: 'https://nodejs.org/', Icon: <Node /> },

]

const toolButtons = [
    { href: 'https://figma.com/', Icon: <Figma /> },
    { href: 'https://netlify.com/', Icon: <Netlify /> },
    { href: 'https://vercel.com/', Icon: <Vercel /> },
    { href: 'https://github.com/gabriel-waltmann/', Icon: <Github /> },
    { href: 'https://code.visualstudio.com/', Icon: <VSCode /> },
    { href: 'https://www.notion.so/', Icon: <Notion /> },
]

export default function Techs() {

    return (
        <motion.section
            id="techs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <h2 className="techsTitle">Tecnologias</h2>

            <List >
                {techButtons.map((tech, index) => {
                    return (
                        <ListItem key={index}>
                            <Link
                                target='_blank'
                                href={tech.href}
                                aria-label={tech.href}
                            >
                                {tech.Icon}
                            </Link>
                        </ListItem>
                    )
                })}
            </List>

            <h2 className="toolsTitle">Ferramentas</h2>

            <List >
                {toolButtons.map((tech, index)  => {
                    return (
                        <ListItem key={index}>
                            <Link
                                target='_blank'
                                href={tech.href}
                                aria-label={tech.href}
                            >
                                {tech.Icon}
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </motion.section>
    )
}
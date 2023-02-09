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
        <section id="techs">
            <h2 className="techsTitle">Tecnologias</h2>

            <ul>
                <li>
                    <Link
                    target='_blank'
                    href={'https://www.typescriptlang.org/'}
                    >
                        <TS/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
                    >
                        <JS/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/css'}
                    >
                        <Css/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://sass-lang.com/#'}
                    >
                        <Sass/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://styled-components.com/'}
                    >
                        <StyledComponents/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://developer.mozilla.org/en-US/docs/Web/html'}
                    >
                        <HTML/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://mui.com/'}
                    >
                        <MaterialUI/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://nodejs.org/en/'}
                    >
                        <Node/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://mongodb.com/'}
                    >
                        <MongoDB/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://www.npmjs.com/#'}
                    >
                        <NPM/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://getbootstrap.com/'}
                    >
                        <Bootstrap/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://nextjs.org/'}
                    >
                        <Next/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://jwt.io/'}
                    >
                        <JWT/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://firebase.google.com/'}
                    >
                        <Firebase/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://www.expressjs.com/'}
                    >
                        <Express/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://axios-http.com/'}
                    >
                        <Axios/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://git-scm.com/'}
                    >
                        <Git/>
                    </Link>
                </li>

                <li>
                    <Link
                    target='_blank'
                    href={'https://tailwindui.com/'}
                    >
                        <Tailwind/>
                    </Link>
                </li>

            </ul>

            <h2 className="toolsTitle">Ferramentas</h2>

            <ul >
                <li>
                    <Link
                    target='_blank'
                    href={'https://www.notion.so/'}
                    >
                        <Notion/>
                    </Link>

                </li>
                <li>
                    <Link
                    target='_blank'
                    href={'https://code.visualstudio.com/'}
                    >
                        <VSCode/>
                    </Link>

                </li>
                <li>
                    <Link
                    target='_blank'
                    href={'https://github.com/GabrielWaltmann/'}
                    >
                        <Github/>
                    </Link>

                </li>
                <li>
                    <Link
                    target='_blank'
                    href={'https://vercel.com/'}
                    >
                        <Vercel/>
                    </Link>

                </li>
                <li>
                    <Link
                    target='_blank'
                    href={'https://netlify.com/'}
                    >
                        <Netlify/>
                    </Link>

                </li>
                <li>
                    <Link
                    target='_blank'
                    href={'https://figma.com/'}
                    >
                        <Figma/>
                    </Link>

                </li>
            </ul>
        </section>
    )
}
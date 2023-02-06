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
                <li><TS/></li>
                <li><JS/></li>
                <li><Css/></li>
                <li><Sass/></li>
                <li><StyledComponents/></li>
                <li><HTML/></li>
                <li><MaterialUI/></li>
                <li><Node/></li>
                <li><MongoDB/></li>
                <li><NPM/></li>
                <li><Bootstrap/></li>
                <li><Next/></li>
                <li><JWT/></li>
                <li><Firebase/></li>
                <li><Express/></li>
                <li><Axios/></li>
                <li><Git/></li>
                <li><Tailwind/></li>
            </ul>

            <h2 className="toolsTitle">Ferramentas</h2>

            <ul >
                <li><Notion/></li>
                <li><VSCode/></li>
                <li><Github/></li>
                <li><Github/></li>
                <li><Vercel/></li>
                <li><Netlify/></li>
                <li><Figma/></li>
            </ul>
        </section>
    )
}
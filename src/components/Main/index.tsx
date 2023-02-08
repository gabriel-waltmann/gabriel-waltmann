import About from "./About";
import Projects from "./Projects";
import Techs from "./Techs";
import Contact from "./Contact";

export default function Main({data}: any){
    return (
        <>
            <About/>

            <Techs/>

            <Projects data={data}/>

            <Contact />
        </>

    )
}


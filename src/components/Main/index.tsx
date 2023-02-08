import About from "./About";
import Projects from "./Projects";
import Techs from "./Techs";

export default function Main({data}: any){
    return (
        <>
            <About/>

            <Techs/>

            <Projects data={data}/>

        </>

    )
}


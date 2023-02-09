import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';

export default function About() {
    return (
        <>

            <section id='about'>
                <div className='col-1'>
                    {Typewriter()}
                    
                    <p>Eu me chamo Gabriel Waltmann e moro em Campo Alegre - SC. Desenvolvo projetos com foco principal no Front End, desde 2020 venho desenvolvendo minhas habilidades no desenvolvimento Web.</p>
                </div>
                <div className='col-2'>
                    <Image
                        src={'/assets/images/profile.png'}
                        alt={'Image de perfil de Gabriel Waltmann'}
                        width={200}
                        height={200}
                    />

                    <div className="buttons">
                        <Button variant="outlined">
                            <Link href="https://github.com/GabrielWaltmann" target="_blank" >Github</Link>
                        </Button>
                        <Button variant="outlined">
                            <Link href='https://www.linkedin.com/in/gabrielwaltmann' target="_blank">Linkedin</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

function Typewriter() {
    return (
        <TypewriterComponent
            onInit={(typewriter) => {
                typewriter.typeString('Olá mundo!')
                .callFunction(() => { })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => { })
                .start();
                

                typewriter.typeString('Meu nome é Gabriel Waltmann')
                .pauseFor(1000)
                .callFunction(() => { })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => { })
                .start();

                typewriter.typeString('Eu sou um desenvolvedor Front-End')
                .pauseFor(1000)
                .pauseFor(1000)
                .callFunction(() => { })
                .callFunction(() => { })
                .start();
            }}
        />)
}
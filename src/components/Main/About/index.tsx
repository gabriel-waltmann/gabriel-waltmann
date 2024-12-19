
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect';
import Buttons from './Buttons';

export default function About() {
    return (
        <>

            <section id='about'>
                <div className='col-1'>
                    {Typewriter()}
                    
                    <p>Sou um desenvolvedor backend apaixonado por tecnologia e resolução de problemas. Minha experiência inclui o desenvolvimento de soluções robustas e escaláveis, com foco principal na experiencia do usuário. Tenho habilidade em criar APIs eficientes, integrar sistemas complexos e otimizar fluxos de trabalho para atender às necessidades do cliente.</p>
                </div>
                <div className='col-2'>
                    <Image
                        src={'/assets/images/profile.png'}
                        alt={'Image de perfil de Gabriel Waltmann'}
                        width={200}
                        height={200}
                    />

                    <Buttons/>
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
                

                typewriter.typeString('Meu nome é Gabriel Waltmann!')
                .pauseFor(1000)
                .callFunction(() => { })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => { })
                .start();

                typewriter.typeString('Eu sou um desenvolvedor Backend!')
                .pauseFor(1000)
                .pauseFor(1000)
                .callFunction(() => { })
                .callFunction(() => { })
                .start();
            }}
        />)
}
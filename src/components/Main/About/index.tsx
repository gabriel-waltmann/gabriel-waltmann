
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect';
import Buttons from './Buttons';

export default function About() {
    return (
        <section id='about'>
            <div className='col-1'>
                {Typewriter()}
                
                <p>Sou desenvolvedor fullstack há 3 anos. Tenho experiência no desenvolvimento de soluções robustas e escaláveis, com foco principal na experiência do usuário. Nesse tempo, tenho adquirido habilidade em criar APIs eficientes, integrar sistemas complexos e otimizar fluxos de trabalho para atender às necessidades do cliente. Domino tecnologias como nodejs, sql e java.</p>
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
    );
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
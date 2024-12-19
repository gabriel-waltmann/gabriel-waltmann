import { IProject } from '@/types/Projects';
import { motion } from 'framer-motion';
import Project from './Project';

export default function List(): JSX.Element {
    const projects: IProject[] = [
        {
            heading: "Login e cadastro de usuário",
            github: null,
            description: "Desenvolvimento de enpoints para autenticação de usuários.",
            host: "https://reune.app/login",
            image: { url: "/projects/autenticacao.png" },
        },
        {
            heading: "Relatório de presença",
            github: null,
            description: "Desenvolvimento de enpoints para geração de relatórios.",
            host: null,
            image: { url: "/projects/relatorio.png" },
        },
        {
            heading: "Comunidade e eventos",
            github: null,
            description: "Desenvolvimento de enpoints para gestão de comunidades e eventos.",
            host: null,
            image: { url: "/projects/relatorio.png" },
        },
        {
            heading: "Eventos",
            github: null,
            description: "Desenvolvimento de enpoints para gestão de evento, seus participantes e compartilhamento.",
            host: "https://reune.app/eventos/comunidade/reune/1529",
            image: { url: "/projects/evento.png" },
        },
        {
            heading: "Registrador de espediente",
            github: "https://github.com/gabriel-waltmann/working-timer-record",
            description: "Desenvolvimento de enpoints para registro de hora de entrada e saída. Permite exportar em excel. Calcula o custo total com base no valor hora",
            host: "https://working-timer-record.onrender.com",
            image: { url: "/projects/record-time.jpeg" },
        },
        {
            heading: "Portifólio dinâmico",
            github: "https://github.com/gabriel-waltmann/gabriel-waltmann-api",
            description: "Desenvolvimento de enpoints para gestão de projetos, tecnologias e posts do portifólio.",
            host: null,
            image: { url: "/projects/portfolio.png" },
        },
        {
            heading: "Controle de associado",
            github: null,
            description: "Desenvolvimento de enpoints para gestão de associados e consumo de água.",
            host: null,
            image: { url: "/projects/associados.jpeg" },
        },
        {
            heading: "Impressão de cobrança",
            github: null,
            description: "Desenvolvimento de enpoints para gestão de cobranças e impressão.",
            host: null,
            image: { url: "/projects/impressao.jpeg" },
        },
    ];

    return (
        <>
            <h2>Projetos</h2>

            <motion.ul>
                {projects.map((project, index) => <Project project={project} key={'project'+index} /> )}
            </motion.ul>
        </>
    )
}

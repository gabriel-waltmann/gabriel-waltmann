import { IProject } from '@/types/Projects';
import { motion } from 'framer-motion';
import Project from './Project';

export default function List() {
    const projects: IProject[] = [];

    return (
        <>
            <h2>Projetos</h2>

            <motion.ul >
                {projects.map((project, index) => <Project project={project} key={'project'+index} /> )}
            </motion.ul>
        </>
    )
}

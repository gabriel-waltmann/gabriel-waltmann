import { ProjectProps } from '../../../../types/Projects';
import { motion } from 'framer-motion';
import Project from './Project';

export default function List() {
    const projects: any[] = [];

    return (
        <>
            <h2>Projetos</h2>

            <motion.ul >
                {projects.map((project: ProjectProps) => {
                    return (
                        <Project
                            key={project.heading}
                            heading={project.heading}
                            description={project.description}
                            image={project.image}
                            github={project.github}
                            host={project.host}
                        />
                    )
                })}
            </motion.ul>
        </>
    )
}

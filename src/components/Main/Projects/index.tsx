import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';
import { client } from 'apolloClient'
import { Variant } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Project } from '../../../types/Projects';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Gallery({ projects }: any) {

  return (
    <>
      <h2>Projetos</h2>

      <ul 
        >
        {projects.map((project: Project) => {
          

          const ref = useRef(null)
        const isInView = useInView(ref, { once: true })
        const showThenIsInView = {
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
          const bg = {
            backgroundImage: `url(${project.image.url})`,
            ...showThenIsInView
          }
          return (
            <motion.li 
            key={project.heading} 
            style={bg} 
            ref={ref}
            >
              <article>

                <h2>{project.heading}</h2>

                <p>{project.description}</p>
                <div className="buttons">
                  <Button variant="contained" >
                    <Link href={project.github} target='_blank'>
                      <GitHubIcon />
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link href={project.host} target="_blank">
                      <LanguageIcon />
                    </Link>
                  </Button>
                </div>
              </article>
            </motion.li>
          )
        })}
      </ul>
    </>
  )
}

export default function Projects({ data }: { data: { projects: [] } }) {
  return (
    <section id='projects'>
      <Gallery projects={data.projects} />
    </section>
  )
}
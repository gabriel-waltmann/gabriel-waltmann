import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';
import { client } from 'apolloClient'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Project } from '../../../types/Projects';
import Link from 'next/link';

function Gallery({projects}: any) {
  console.log(projects)

  return (
    <>
      <h2>Projetos</h2>

      <ul>
        {projects.map((project: Project) => {
          const bg = {backgroundImage: `url(${project.image.url})`}
          return (
            <li key={project.heading} style={bg}>
              <article>

                <h2>{project.heading}</h2>

                <p>{project.description}</p>
                <div className="buttons">
                  <Button variant="contained" >
                    <Link href={project.github} target='_blank'>
                      <GitHubIcon/>
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link href={project.host} target="_blank">
                      <LanguageIcon/>
                    </Link>
                  </Button>
                </div>
              </article>
            </li>
          )
      })}
      </ul>
    </>
  )
}

export default function Projects({data}: {data: {projects: []}}) {
  return (
    <section id='projects'>
      <Gallery projects={data.projects}/>
    </section>
  )
}
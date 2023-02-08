import * as React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { client } from 'apolloClient'
import { useQuery, gql } from '@apollo/client';
import { Project } from '../../../types/Projects';

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
                  <Button variant="contained" >Github</Button>
                  <Button variant="contained" >Site</Button>
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
import * as React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { client } from 'apolloClient'
import { useQuery, gql } from '@apollo/client';
import { Project } from '../../../types/Projects';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

function Gallery({projects}: any) {

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
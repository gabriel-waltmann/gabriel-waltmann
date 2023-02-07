import * as React from 'react';
import request from 'graphql-request';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { GET_PROJECTS  } from '@/graphql/querys';
import {gql} from 'graphql-request';

export const getStaticProps = async () => {


  console.log(GET_PROJECTS)
  // return {props: {projects}}
}

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

function Gallery() {

  useEffect(()=>{
    const GET_PROJECTS = gql`
    query Projects {
        projects {
            createdAt
            description
            heading
            id
            publishedAt
            slug
            updatedAt
        }
    }
` 
console.log(GET_PROJECTS)
    const images = Array.from(document.getElementsByClassName('imgList') as HTMLCollectionOf<HTMLElement>);

    images.forEach((item, index) =>{
      if(item.style){
        const style = item.style
        const isPair = index % 2 === 0
        const margin = {
          left: '0 0 0 auto',
          rigth: 'auto 0 0 0'
        }
        isPair ? style.margin = margin.rigth : style.margin = margin.left
      }
    })
  })
  return (
    <>
      <h2>Projetos</h2>
      {itemData.map((item) => {
        return (
          <div key={item.title}>
            <Image
              style={{ margin: '0 auto' }}
              src={item.img}
              alt={'image from ' + item.author}
              className={'imgList'}
              height={400}
              width={700}
            />
            <article>

              <h2>{item.title}</h2>

              <p>{item.author}</p>
              <div className="buttons">
                <Button variant="outlined">Github</Button>
                <Button variant="outlined">Site</Button>
              </div>
            </article>
          </div>
        )
        
    })}
    </>
  )
}


export default function Projects() {
  return (
    <section id='projects'>
      <Gallery />
    </section>
  )
}
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

import Main from '../layouts/Main';

const galleryImages = [
  {
    key: 1,
    alt: 'catdetector',
    src: '/images/projects/catdetector.jpg',
    width: '1200',
    height: '803',
    thumbnail: '/images/projects/catdetector.jpg',
  },
  {
    key: 2,
    alt: 'harvest',
    src: '/images/projects/harvest.jpg',
    width: '1200',
    height: '551',
    thumbnail: '/images/projects/harvest.jpg',
  },
  {
    key: 3,
    alt: 'nearestdollar',
    src: '/images/projects/nearestdollar.jpg',
    width: '1200',
    height: '766',
    thumbnail: '/images/projects/nearestdollar.jpg',
  },
  {
    key: 4,
    alt: 'spacepotato',
    src: '/images/projects/spacepotato.jpg',
    width: '1200',
    height: '511',
    thumbnail: '/images/projects/spacepotato.jpg',
  },
  {
    key: 5,
    alt: 'kitten1',
    src: 'https://placekitten.com/1024/768?image=1',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=1',
  },
  {
    key: 6,
    alt: 'kitten2',
    src: 'https://placekitten.com/1024/768?image=2',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=2',
  },
  {
    key: 7,
    alt: 'kitten3',
    src: 'https://placekitten.com/1024/768?image=3',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=3',
  },
  {
    key: 8,
    alt: 'kitten4',
    src: 'https://placekitten.com/1024/768?image=4',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=4',
  },
  {
    key: 9,
    alt: 'kitten5',
    src: 'https://placekitten.com/1024/768?image=5',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=5',
  },
  {
    key: 10,
    alt: 'kitten6',
    src: 'https://placekitten.com/1024/768?image=6',
    width: '1024',
    height: '768',
    thumbnail: 'https://placekitten.com/150/120?image=6',
  },
];

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>

    <div className="gallery">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        columnGap: '15px',
        rowGap: '15px',
      }}
      >
        <Gallery>
          {galleryImages.map((image) => (
            <Item
              key={image.key}
              original={image.src}
              thumbnail={image.thumbnail}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <button
                  type="button"
                  onClick={open}
                  ref={ref}
                  style={{
                    background: `url(${image.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100px',
                    width: '150px',
                    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                  }}
                  aria-label={image.alt}
                />
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </div>
  </Main>
);

export default Index;

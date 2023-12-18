/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import styles from './Specs.module.scss';

const techSpecs = [
  { name: 'Screen', value: '6.5” OLED' },
  { name: 'Resolution', value: '2688x1242' },
  { name: 'Processor', value: 'Apple A12 Bionic' },
  { name: 'RAM', value: '3 GB' },
  { name: 'Built in Memory', value: '512 GB' },
  { name: 'Camera', value: 'Triple 12MP' },
  { name: 'Zoom', value: 'digital zoom up to 10x' },
  { name: 'Cell', value: 'LTE Advanced' },
];

const aboutSpecs = [
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
  {
    title: 'And then there was Pro',
    description: `A transformative triple‑camera
                  system that adds tons of capability without complexity.
                  An unprecedented leap in battery life.
                  And a mind‑blowing chip that doubles down on machine
                  learning and pushes the boundaries of what a smartphone can do.
                  Welcome to the first iPhone powerful enough to be called Pro.`,
  },
];

export const Specs = () => {
  return (
    <div className={styles.specs_container}>
      <div className={styles.specs_about}>
        <div className={styles.specs_about_header}>
          <h2>About </h2>
        </div>

        {aboutSpecs.map((about, index) => (
          <section key={index} className={styles.specs_about_section}>
            <h3 className={styles.specs_about_name}>{about.title}</h3>
            <article className={styles.specs_about_value}>
              {about.description}
            </article>
          </section>
        ))}
      </div>

      <div className={styles.specs_tech}>
        <div className={styles.specs_tech_header}>
          <h2>Tech specs </h2>
        </div>
        {techSpecs.map((spec, index) => (
          <section key={index} className={styles.specs_tech_section}>
            <article className={styles.specs_tech_name}>{spec.name}</article>
            <article className={styles.specs_tech_value}>{spec.value}</article>
          </section>
        ))}
      </div>
    </div>
  );
};

import React from 'react'
import "../app/globals.css"

export default function ExperienceSection() {
  return (
    <section className='experience-section flex flex-col justify-center h-screen p-20 bg-black lg:items-start items-center text-white'>
      <div>
        <h2 className='font-semibold text-5xl lg:text-7xl mb-4 lg:text-left text-center'>Professional Experience</h2>
        <p className='font-semibold text-3xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          Work, Communities and Student Life
        </p>
      </div>
    </section>
  );
}

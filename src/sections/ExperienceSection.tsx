import React from 'react'
import "../app/globals.css"

export default function ExperienceSection() {
  return (
    <section className='experience-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white'>
      <div  className='lg:w-3/5'>
        <h2 className='font-semibold text-4xl lg:text-7xl mb-4 lg:text-left text-center'>Experience / Expertise</h2>
        <p className='font-semibold text-1xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          Core Experience and Achievements
        </p>
      </div>
    </section>
  );
}

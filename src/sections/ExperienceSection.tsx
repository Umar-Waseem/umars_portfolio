import React from 'react'
import "../app/globals.css"

export default function ExperienceSection() {
  return (
    <section className='experience-section min-h-screen p-20 bg-black grid grid-cols-2 gap-8 items-center text-white scrollSnap'>
      <div>
        <h2 className='font-semibold text-7xl mb-4'>Professional Experience</h2>
        <p className='font-semibold text-3xl mb-6 gradient-text'>
          Work, Communities and Student Life
        </p>
      </div>
    </section>
  );
}

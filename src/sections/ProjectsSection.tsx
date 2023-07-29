import React from 'react'

export default function ProjectsSection() {
  return (
    <section className='projects-section min-h-screen p-20 bg-black grid grid-cols-2 gap-8 items-center text-white'>
      <div>
        <h2 className='font-semibold text-7xl mb-4'>Projects / Products</h2>
        <p className='font-semibold text-3xl mb-6 gradient-text'>
          Code I have written, Products I have built
        </p>
      </div>
    </section>
  );
}

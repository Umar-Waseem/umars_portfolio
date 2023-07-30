import React from 'react'

export default function ProjectsSection() {
  return (
    <section className='projects-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white'>
      <div>
        <h2 className='font-semibold text-5xl lg:text-7xl mb-4 lg:text-left text-center'>Projects / Products</h2>
        <p className='font-semibold text-3xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          Code I have written, Products I have built
        </p>
      </div>
    </section>
  );
}

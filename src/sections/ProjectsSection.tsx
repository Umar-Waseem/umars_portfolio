"use client"

import Link from 'next/link';
import React from 'react'

export default function ProjectsSection() {

  function onSeeProjectsClick (){
    console.log("See Projects Clicked")

    // navigate to route /projects


  }

  return (
    <section className='projects-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white'>
      <div className='lg:w-3/5'>
        <h2 className='font-semibold text-4xl lg:text-7xl mb-4 lg:text-left text-center'>Projects / Products</h2>
        <p className='font-semibold text-1xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          Code I have written, Products I have built
        </p>
        <div className='flex lg:flex-row flex-col mt-10 lg:items-start items-center'>
            <Link href={"/projects"} className='custom-button font-semibold'>See Projects</Link>
        </div>
      </div>
    </section>
  );
}

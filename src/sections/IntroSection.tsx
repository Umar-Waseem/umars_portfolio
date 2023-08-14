import React from 'react'

export default function IntroSection() {
  return (
    <section className='projects-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white'>
      <div className='lg:w-3/5'>
        <h2 className='font-semibold text-2xl lg:text-7xl mb-4 lg:text-left text-center'>Who Is Muhammad Umar?</h2>
        <p className='font-semibold text-sm lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          Software Engineer - Emerging Tech Entrepreneur - Computer Science Graduate - Passionate Focus on Computer Security
        </p>
      </div>
    </section>
  );
}

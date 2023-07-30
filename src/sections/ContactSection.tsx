import React from 'react'

export default function ContactSection() {
  return (
    <section className='contact-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white'>

        <h2 className='font-semibold text-5xl lg:text-7xl mb-4 lg:text-left text-center'>Contact Me</h2>
        <p className='font-semibold text-3xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          What brings you here? What can I do for you. <br />
          Drop me a message.
        </p>

    </section>
  );
}

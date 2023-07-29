import React from 'react'

export default function ContactSection() {
  return (
    <section className='contact-section min-h-screen p-20 bg-black grid grid-cols-2 gap-8 items-center text-white'>
      <div>
        <h2 className='font-semibold text-7xl mb-4'>Contact Me</h2>
        <p className='font-semibold text-3xl mb-6 gradient-text'>
          What brings you here? What can I do for you. <br />
          Drop me a message.
        </p>
      </div>
    </section>
  );
}

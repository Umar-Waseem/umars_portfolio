import ContactForm from '@/components/contact_form';
import React from 'react';

export default function ContactSection() {


  return (
    <section className='contact-section flex flex-col lg:flex-row lg:justify-between justify-center h-screen p-10 bg-black lg:items-center items-center text-white'>

      <div className='flex flex-col lg:w-1/2'>
        <h2 className='font-semibold text-4xl lg:text-7xl mb-4 lg:text-left text-center'>Contact Me</h2>
        <p className='font-semibold text-1xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
          What brings you here? What can I do for you. <br />
          Drop me a message.
        </p>
      </div>
      <div className='lg:w-1/2'>
        <ContactForm />
      </div>

    </section>
  );
}

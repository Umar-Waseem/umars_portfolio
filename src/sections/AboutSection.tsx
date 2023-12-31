

import React, { ReactNode } from 'react';
import Image from 'next/image';
import socialLinksList from "../constants/socials_list";
import Link from 'next/link.js';
import "../app/globals.css"
import ContactButton from '@/components/contact_button';

export default function AboutSection() {

  function Socials() {
    return socialLinksList.map((socialLink, index) => (
      <div key={index} className="tooltip mr-4">
        <Link href={socialLink.link}>
          <Image key={index} src={socialLink.icon} alt={socialLink.name} height={40} width={40} />
        </Link>
        <span className="tooltiptext">{socialLink.name}</span>
      </div>
    ));
  }

  return (
    <main className='about-section flex flex-col justify-center h-screen lg:p-10 p-6 bg-black lg:items-start items-center text-white theContainer section'>
      <div className="lg:w-3/5">
        <h1 className='font-semibold text-4xl lg:text-7xl mb-6 lg:text-left text-center'>Muhammad Umar Waseem</h1>
        <p className='font-semibold text-sm lg:text-4xl mb-8 gradient-text lg:text-left text-center'>
          Building Quality Software Solutions At Light Speed
        </p>

        <div className="flex flex-row lg:items-start items-center">
          <Socials />
        </div>
        <ContactButton />
      </div>
    </main>
  );


}


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
          <Image key={index} src={socialLink.icon} alt={socialLink.name} height={50} width={50} />
        </Link>
        <span className="tooltiptext">{socialLink.name}</span>
      </div>
    ));
  }

  return (
    <main className='about-section flex flex-col justify-center h-screen p-10 bg-black lg:items-start items-center text-white theContainer section'>
      <h1 className='font-semibold text-5xl lg:text-7xl mb-6 lg:text-left text-center'>Muhammad Umar Waseem</h1>
      <p className='font-semibold text-3xl lg:text-4xl mb-16 gradient-text lg:text-left text-center'>
        Building Software Solutions That Hold Value
      </p>
      <div className="flex flex-row lg:items-start items-center">
        <Socials />
      </div>
        <ContactButton />
    </main>
  );
  

}
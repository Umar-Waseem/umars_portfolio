import React, { ReactNode } from 'react';
import Image from 'next/image';
import socialLinksList from "../constants/socials_list";
import Link from 'next/link.js';
import "../app/globals.css"

export default function AboutSection() {

  function getSocials(): ReactNode {
    return socialLinksList.map((socialLink, index) => (
      <Link key={index} href={socialLink.link} className='mr-4'>
        <Image key={index} src={socialLink.icon} alt={socialLink.name} height={50} width={50} />
      </Link>
    ));
  }


  return (
    <section className='about-section flex flex-col justify-center h-screen p-20 bg-black lg:items-start items-center text-white theContainer section'>

      <h2 className='font-semibold text-5xl lg:text-7xl mb-4 lg:text-left text-center'>Get To Know Umar</h2>
      <p className='font-semibold text-3xl lg:text-4xl mb-6 gradient-text lg:text-left text-center'>
        Muhammad Umar is a Full Stack Software Engineer
      </p>
      <div className="flex flex-row lg:items-start items-center">
        {getSocials()}
      </div>
    </section>
  );

}
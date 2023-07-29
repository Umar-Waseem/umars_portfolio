import React, { ReactNode } from 'react';
import Image from 'next/image';
import socialLinksList from "../constants/socials_list";
import Link from 'next/link.js';
import "../app/globals.css"

export default function AboutSection() {

  function getSocials(): ReactNode{
      return socialLinksList.map((socialLink, index) => (
      <Link key={index} href={socialLink.link} className='mr-4'>
        <Image key={index} src={socialLink.icon} alt={socialLink.name} height={50} width={50} />
      </Link>
    ));
  }


  return (
    <section className='about-section min-h-screen p-20 bg-black grid grid-cols-2 gap-8 items-center text-white scrollSnap'>
      <div>
        <h2 className='font-semibold text-7xl mb-4'>Get To Know Umar</h2>
        <p className='font-semibold text-3xl mb-6 gradient-text'>
          Muhammad Umar is a Full Stack Software Engineer
        </p>
        <div className="flex flex-row justify-left">
          {getSocials()}
        </div>
      </div>
    </section>
  );

}
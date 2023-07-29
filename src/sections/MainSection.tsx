import React from 'react';
import '../app/globals.css';


export default function MainSection() {
    return (
        <main className='main-section gradient-shadow scrollSnap'>
            <section className="h-screen bg-black flex flex-col items-center justify-center text-white theContainer section">
                <h1 className='font-semibold text-5xl mb-4 lg:text-7xl text-center'>Muhammad Umar Waseem</h1>
                <h2 className='font-semibold text-3xl gradient-text mb-6 lg:text-4xl text-center'>Building Software That Brings Value</h2>
            </section>
        </main>
    );
}

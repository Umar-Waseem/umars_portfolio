"use client"

import React from 'react';
import "../app/globals.css"

const ContactForm = () => {
    


    return (
        <form action="#" className="w-full">
            {/* make a contact form with name, email and message */}
            <div className="space-y-4 flex flex-col justify-center">
                <div >
                    <label htmlFor="name" className="block lg:text-lg text-xs font-extrabold text-white">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full p-2 text-black font-bold shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block lg:text-lg text-xs font-extrabold text-white">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full p-2 text-black font-bold shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div>   
                    <label htmlFor="briefIntro" className="block lg:text-lg text-xs font-extrabold text-white">
                        Introduce Yourself Briefly
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="briefIntro"
                            name="briefIntro"
                            rows={3}
                            required
                            className="block w-full text-black font-bold p-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                </div>
                <div>   
                    <label htmlFor="message" className="block lg:text-lg text-xs font-extrabold text-white">
                        Message
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="block w-full text-black font-bold p-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:justify-start'>
                <button className="custom-button text-xs lg:text-lg mr-2 mb-4 mt-4">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;

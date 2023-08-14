"use client"


function ContactButton() {
    const handleGetInTouch = () => {
        // Replace the following email address with the appropriate one
        const emailAddress = "umar.waseem@gmail.com";
        window.location.href = `mailto:${emailAddress}`;
    };

    // Event handler for the "Book A Meeting" button
    const handleBookMeeting = () => {
        window.location.href = "https://topmate.io";
    };
    return (
        <div className='flex lg:flex-row flex-col lg:mt-10 mt-6 lg:items-start items-center'>
            <button onClick={handleBookMeeting} className="meetingButton mr-2 lg:mb-4 mb-2 text-xs lg:text-lg">Book A Meeting</button>
            <button onClick={handleGetInTouch} className="getInTouchButton text-xs lg:text-lg">Get In Touch</button>
        </div>
    );
}

export default ContactButton;
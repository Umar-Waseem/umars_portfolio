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
        <div className='flex lg:flex-row flex-col mt-10 lg:items-start items-center'>
            <button onClick={handleBookMeeting} className="meetingButton mr-2 mb-4">Book A Meeting</button>
            <button onClick={handleGetInTouch} className="getInTouchButton">Get In Touch</button>
        </div>
    );
}

export default ContactButton;
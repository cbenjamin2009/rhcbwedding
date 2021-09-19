import React from 'react'
import PressRoomImage from "../Images/PressRoom_Logo.jpg"

function Venue() {
    return (
        <div className="venueContainer">
            <section id="venueTitle">
                <div className="sectionTitle--div">
                <h3 className="sectionTitle">Venue: The Press Room</h3>
                </div>
                <div className="venueInfo">
                    <p>This space housed the printing presses for the Tacoma Daily Ledger and Tacoma News Tribune from the early part of the 20th century. This was the voice of Tacoma during its golden age of print media.</p>
                </div>
            </section>
          
            <section id="venueImageSection">
                <img className="venueImage img-fluid" src={PressRoomImage} alt="Venue Front Door" />
            </section>
            <section id="venueLocation">
                <div className="venueLocation--div">
                <span className="venueAddressTitle">Address: </span> <span>704 Opera Alley, Tacoma, WA 98402</span>
                    </div>
                    
            </section>
            <section className="venueMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.9111880638493!2d-122.44410291297308!3d47.25743992002504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490553088991593%3A0x862b27c3678d90a!2sThe%20Press%20Room!5e0!3m2!1sen!2sus!4v1631671144642!5m2!1sen!2sus" className="map" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </section>
        </div>
    )
}

export default Venue

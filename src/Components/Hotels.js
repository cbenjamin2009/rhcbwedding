import React from 'react'
import HolidayInn from "../Images/holiday_inn.png"
import HotelMurano from "../Images/hotelmurano.svg"
import McMenamins from "../Images/mcmenamins.png"
import MuranoImage from "../Images/murano_image.jpg"
import HolidayInnImage from "../Images/holiday_inn_image.jpg"
import McMenaminsImage from "../Images/mcmenamins_image.jpg"

function Hotels() {
    return (
        <section id="hotels">
        <div className="hotelsContainer">
            <h2>Places to Stay</h2>
            <div className="flexContainer">
                {/* Card 1 */}
                <div className="flexHotel--card">
                   <div className="cardImage">
                        <img className="cardLogo img-fluid" src={HolidayInn} alt="The logo for Holiday Inn Express"/>
                    </div>
                    <div className="cardDescription">
                        <h3>Holiday Inn Express</h3>
                        <p>A 5 minute drive to the venue</p>
                    </div>
                    <div className="hotelImage">
                        <img class="img-fluid hotelPicture" src={HolidayInnImage} alt="The front of the Holiday Inn hotel"/>
                    </div>
                    <div className="cardLink">
                        <div className="link">
                        <a className="mapLink" href="https://www.google.com/maps/place/Holiday+Inn+Express+%26+Suites+Tacoma+Downtown,+an+IHG+Hotel/@47.2424493,-122.4400284,17z/data=!3m2!4b1!5s0x5490557098192fc1:0x3dfa3bb0c2939b45!4m8!3m7!1s0x549055709f567c7b:0x4fb0352b913e6486!5m2!4m1!1i2!8m2!3d47.2424493!4d-122.4378344">Map</a>
                        </div>
                        <div className="link linkXl">
                        <a className="mapLink" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/tacoma/seacs/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-SEACS">Check Availability</a>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flexHotel--card">
                    <div className="cardImage">
                        <img className="cardLogo  img-fluid" src={HotelMurano} alt="The logo for Hotel Murano"/>
                    </div>
                    <div className="cardDescription">
                        <h3>Hotel Murano</h3>
                        <p>A 4 minute drive to the venue</p>

                    </div>
                    <div className="hotelImage">
                        <img class="img-fluid hotelPicture" src={MuranoImage} alt="The front of the Hotel Murano"/>
                    </div>
                    <div className="cardLink">
                        <div className="link">
                        <a className="mapLink" href="https://www.google.com/maps/place/Hotel+Murano/@47.253914,-122.4454402,16z/data=!4m20!1m13!2m12!1sHotels!3m6!1sHotels!2sThe+Press+Room,+704+Opera+Alley,+Tacoma,+WA+98402!3s0x5490553088991593:0x862b27c3678d90a!4m2!1d-122.4419025!2d47.2574364!5m3!5m2!4m1!1i2!3m5!1s0x5490557519d0bcbb:0xc8790df7baa762fb!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA">Map</a>
                        </div>
                        <div className="link linkXl">
                        <a className="mapLink" href="https://www.provenancehotels.com/hotel-murano-tacoma?utm_source=gmb&utm_medium=organic">Check Availability</a>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flexHotel--card">
                <div className="cardImage">
                    <img className="cardLogo  img-fluid" src={McMenamins} alt="The logo for McMenamins Elks Temple"/>
                </div>
                <div className="cardDescription">
                    <h3>McMenamins Elks Temple</h3>
                    <p>A 1 Minute Walk to the Venue</p>
                </div>
                <div className="hotelImage">
                        <img class="img-fluid hotelPicture" src={McMenaminsImage} alt="The front of the McMenamins Elk Lodge"/>
                    </div>
                <div className="cardLink">
                        <div className="link">
                        <a className="mapLink" href="https://www.google.com/maps/place/McMenamins+Elks+Temple/@47.2577364,-122.4424921,18z/data=!3m1!5s0x549055a6d835ced3:0x8e461d6428be1079!4m25!1m16!4m15!1m6!1m2!1s0x5490553088991593:0x862b27c3678d90a!2sThe+Press+Room,+Opera+Alley,+Tacoma,+WA!2m2!1d-122.4419025!2d47.2574364!1m6!1m2!1s0x549055e9229456bf:0x2db82f4e7da3e668!2sMcMenamins+Elks+Temple,+565+Broadway,+Tacoma,+WA+98402!2m2!1d-122.4410012!2d47.2579589!3e2!3m7!1s0x549055e9229456bf:0x2db82f4e7da3e668!5m2!4m1!1i2!8m2!3d47.2579589!4d-122.4410012">Map</a>
                        </div>
                        <div className="link linkXl">
                        <a className="mapLink" href="https://www.mcmenamins.com/elks-temple?utm_source=Google%20Maps&utm_medium=Website%20Button&utm_campaign=Elks%20Temple">Check Availability</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hotels

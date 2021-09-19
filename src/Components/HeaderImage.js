import React from 'react'
import Image from "../Images/couple_image.jpg"

function HeaderImage() {
    return (
        <div className="headerImage--div">
            <img className="headerImage" src={Image} alt="Rachel and Chris" />
        </div>
    )
}

export default HeaderImage


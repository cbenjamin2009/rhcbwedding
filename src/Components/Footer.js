import React from 'react'
import TacoITLogo from '../Images/Website_Logo.png'
function Footer() {
    return (
        <div className="footerText">
            Copyright © 2021 | Chris Benjamin | Website By: <a className="footerLink" href="https://www.taco-it.com"><img className="footerImage" src={TacoITLogo} /></a>  
        </div>
    )
}

export default Footer

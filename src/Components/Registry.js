import React from 'react'

function Registry() {
    // fab fa-amazon
    return (
        <section id="registry">
        <div className="registry--div">
            <h3 className="sectionTitle">Registry</h3>
            <p>We have put together a registry for our wedding that includes optional items if you wish to purchase us a gift.</p>
            <p>Click on the images below to be taken to the respective website for more information!</p>
            <ul className="registryList">
                <li><a className="regLink" href="https://www.amazon.com/wedding/chris-benjamin-rachel-hedlund--january-2022/registry/CXG03O6H6V00
"><i class="fab fa-amazon"></i></a></li>
                <li><a className="regLink target" href="https://www.target.com/gift-registry/gift/rachel-and-chris"><i class="fad fa-dot-circle"></i></a> </li>
                <li><a className="regLink" href=""></a></li>
            </ul>
        </div>
        </section>
    )
}

export default Registry

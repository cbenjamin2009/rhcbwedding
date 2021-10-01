import React, {useState} from 'react'



function Nav() {
    const [active, setActive] = useState('Home')

    let nav;

    function cleanup(){
    let allnav = document.querySelectorAll('.nav-Link')
        allnav.forEach(e => e.classList.remove('active'))
    }

    switch(active){
    case 'Registry':
        cleanup();
        nav = document.getElementById('nav-link-registry')
        nav.classList.add('active');
        break;
    case 'Venue':
        cleanup();
        nav = document.getElementById('nav-link-venue')
        nav.classList.add('active');
        break;
    case 'Hotels':
        cleanup();
        nav = document.getElementById('nav-link-hotels')
        nav.classList.add('active');
        break;
    case 'RSVP':
        cleanup();

        nav = document.getElementById('nav-link-rsvp')
        nav.classList.add('active');
        break;
    case 'Home':
        cleanup();
        nav = document.getElementById('nav-link-home')
        //nav.classList.add('active');
        break;
    default:
        cleanup();
        nav = document.getElementById('nav-link-home')
        console.log(nav)
       // nav.classList.add('active');
        break;
    }

    return (
        <div className="navContainer">
            <ul className="navList">
                <li>
                    <a id="nav-link-home" href={'/rhcbwedding/'} className="nav-Link active" onClick={() => setActive('Home')}> Home</a>
                </li>
                <li>
                    <a id="nav-link-registry" href='#registry' className="nav-Link" onClick={() => setActive('Registry')} > Registry</a>
                </li>
                <li>
                    <a id="nav-link-venue" href='#venueTitle' className="nav-Link" onClick={() => setActive('Venue')}> Venue</a>
                </li>
                <li>
                    <a id="nav-link-hotels" href='#hotels' className="nav-Link" onClick={() => setActive('Hotels')}> Hotels</a>
                </li>
                <li>
                    <a id="nav-link-rsvp" href='#rsvp' className="nav-Link" onClick={() => setActive('RSVP')}> RSVP</a>
                </li>

            </ul>
            <div class="fas fa-gem">

            </div>
        </div>
    )
}

export default Nav

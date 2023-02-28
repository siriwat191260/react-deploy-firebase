import React from 'react';
import insta from '../assets/navbar_image/instagram.png';


const Navbar = () => {
    return <div className="nav">
        <a href="/" className="size-title"><div className='grow'> ATIWAT H. </div>
        <div className='element'>
            <ul>
                <li>
                    <div className="grow"><a href="/cv"> CV. </a></div>  
                </li>
            </ul>
        </div>
        </a>

        <div className='element-social'>
            <ul>
                <li>
                    <div className='grow'><a href="https://www.instagram.com/nicesehrgut/"><img src={insta}/></a></div>   
                </li>
            </ul>
        </div>
     </div>   
    }

export default Navbar;



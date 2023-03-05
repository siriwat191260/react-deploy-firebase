import w1 from '../components/assets/WINDOWSEAT/1.png';
import w2 from '../components/assets/WINDOWSEAT/2.png';
import w3 from '../components/assets/WINDOWSEAT/3.png';
import w4 from '../components/assets/WINDOWSEAT/4.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const slideImages = [
 w1,w2,w3,w4 
 
];

const WindowSeat = () => {
    return <div>
                <div className="font-size-str margin-l-3"> WINDOW SEAT </div>
                <div className="font-size-str-intro margin-l-3"> While I was driving, I unexpectedly saw a perfect shot of the sunset. So I decided to take a quick snap with one hand controlling the wheel </div>
                        <div className="slide-container margin-t-8 box-center">
                            <Slide>
                            {slideImages.map((slideImage, index)=> (
                                <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                                </div>
                                </div>
                            ))} 
                            </Slide>
                        </div>
                
                        <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/wayhome"> ◄ THE WAY HOME  </a></div>
                            <div className='font-size-b next' ><a href="/kafka"> KAFKA FESTIVAL ► </a></div>
                    </div>   
             </div>
}

export default WindowSeat;
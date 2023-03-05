import k1 from '../components/assets/KAFKA/1.png';
import k2 from '../components/assets/KAFKA/2.png';
import k3 from '../components/assets/KAFKA/3.png';
import k4 from '../components/assets/KAFKA/4.png';
import k5 from '../components/assets/KAFKA/5.png';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'


const Kafka = () => {
    return <div>
                <div className="font-size-str margin-l-3"> KAFKA FESTIVAL </div>
                <div className="font-size-str-intro margin-l-3"> Being a photographer at the back, the performers are sculptures for me because everyone wants to capture their best shot, best motion but have to be motionless. </div>
                
                <div className='row margin-t-5'>
                    <img src={k1} alt=""/>
                </div>
                <div className='row'>
                    <img src={k2} alt=""/>
                </div>
                <div className='row'>
                    <img src={k3} alt=""/>
                </div>
                <div className='row'>
                    <img src={k4} alt=""/>
                </div>
                <div className='row'>
                    <img src={k5} alt=""/>
                </div>

                <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/window"> ◄ WINDOW SEAT  </a></div>
                            <div className='font-size-b next' ><a href="/streetfood"> THE REAL STREET FOOD ► </a></div>
                    </div>   

             </div>
}

export default Kafka;
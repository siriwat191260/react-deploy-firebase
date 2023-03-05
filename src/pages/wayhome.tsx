import React  from 'react';
import w1 from '../components/assets/TheWayHome/1.png';
import w2 from '../components/assets/TheWayHome/2.png';
import w3 from '../components/assets/TheWayHome/3.png';

const TheWayHome = () => {
    return  <div>
                <div className="font-size-str margin-l-3"> THE WAY HOME </div>
                <div className="font-size-str-intro margin-l-3"> In a very shot period of time in the US, I walked past this place everyday. So I can see the beauty of this common thing. </div>
                   
                        <div className="row_wayhome">
                            <div className='column_wayhome'>
                                <img src={w1} alt=""/>
                            </div>
                            <div className='column_wayhome'>
                                <img src={w2} alt=""/>
                            </div>
                            <div className='column_wayhome'>
                                <img src={w3} alt=""/>
                            </div>
                        </div>

                    <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/justgreen"> ◄ JUST GREEN  </a></div>
                            <div className='font-size-b next' ><a href="/windowseat"> WINDOW SEAT ► </a></div>
                    </div>   
            </div>
}

export default TheWayHome;
import React, { Component }  from 'react';
import str1 from '../components/assets/StreetFood_image/1.png';
import str2 from '../components/assets/StreetFood_image/2.png';
import str3 from '../components/assets/StreetFood_image/3.png';
import str4 from '../components/assets/StreetFood_image/4.png';
import str5 from '../components/assets/StreetFood_image/5.png';
import str6 from '../components/assets/StreetFood_image/6.png';
import str7 from '../components/assets/StreetFood_image/7.png';
import str8 from '../components/assets/StreetFood_image/8.png';
import str9 from '../components/assets/StreetFood_image/9.png';
import str10 from '../components/assets/StreetFood_image/10.png';
import str11 from '../components/assets/StreetFood_image/11.png';
import str12 from '../components/assets/StreetFood_image/12.png';



const StreetFood = () => {
    return <div>
                <div className="font-size-str margin-l-3"> THE REAL STREET FOOD </div>
                <div className="font-size-str-intro margin-l-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, rem eos, iste quae ut, eaque accusamus odio ipsam nobis neque ratione. Molestiae debitis corrupti magnam nisi eligendi minima nobis dolores. </div>
                <div className="font-size-str-intro margin-l-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, rem eos, iste quae ut, eaque accusamus odio ipsam nobis neque ratione. Molestiae debitis corrupti magnam nisi eligendi minima nobis dolores. </div>
                    <div className="row">
                        <div className='column_str'>
                            <img src={str1}/>
                        </div>
                        <div className='column_str'>
                            <img src={str2} />
                        </div>
                    </div>   
                
                    <div className="row">
                        <div className='column_str'>
                            <img src={str3} />
                        </div>
                        <div className='column_str'>
                            <img src={str4} />
                        </div>
                    </div>   
                    

                    <div className="row">
                            <div className='column_str'>
                            <img src={str5}/>
                            </div>
                            <div className='column_str'>
                                <img src={str6} />
                            </div>
                    </div>
                
                    <div className="row">
                            <div className='column_str'>
                                <img src={str7} />
                            </div>
                            <div className='column_str'>
                                <img src={str8} />
                            </div>
                    </div>
                    
                    <div className="row">
                            <div className='column_str'>
                            <img src={str9}/>
                            </div>
                            <div className='column_str'>
                                <img src={str10} />
                            </div>
                    </div>

                    <div className="row">
                            <div className='column_str'>
                                <img src={str11} />
                            </div>
                            <div className='column_str'>
                                <img src={str12} />
                            </div>
                    </div>
                    <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/kafka"> ◄ KAFKA FESTIVAL  </a></div>
                    </div>

            </div>

            
    }

export default StreetFood;
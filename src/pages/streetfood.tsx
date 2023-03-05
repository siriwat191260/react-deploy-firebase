import React  from 'react';
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
                <div className="font-size-str-intro margin-l-3"> It is the first time working for the restaurant and it is in the US. After trying to take food photo, preparing props and following the reference, I found out that it is not my style. So I decided to follow my style in stead. Luckily the restaurant owner really likes my work. He said that this work is very unique and can convey the real street food. </div>
                <div className="font-size-str-1point2 margin-l-3"> Work for Siam Ginger, Boston, USA </div>
                    <div className="row">
                        <div className='column_str'>
                            <img src={str1} alt=""/>
                        </div>
                        <div className='column_str'>
                            <img src={str2} alt=""/>
                        </div>
                    </div>   
                
                    <div className="row">
                        <div className='column_str'>
                            <img src={str3} alt=""/>
                        </div>
                        <div className='column_str'>
                            <img src={str4} alt=""/>
                        </div>
                    </div>   
                    

                    <div className="row">
                            <div className='column_str'>
                            <img src={str5} alt=""/>
                            </div>
                            <div className='column_str'>
                                <img src={str6}  alt=""/>
                            </div>
                    </div>
                
                    <div className="row">
                            <div className='column_str'>
                                <img src={str7} alt=""/>
                            </div>
                            <div className='column_str'>
                                <img src={str8} alt=""/>
                            </div>
                    </div>
                    
                    <div className="row">
                            <div className='column_str'>
                            <img src={str9} alt=""/>
                            </div>
                            <div className='column_str'>
                                <img src={str10} alt=""/>
                            </div>
                    </div>

                    <div className="row">
                            <div className='column_str'>
                                <img src={str11} alt=""/>
                            </div>
                            <div className='column_str'>
                                <img src={str12} alt=""/>
                            </div>
                    </div>
                    <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/kafka"> ◄ KAFKA FESTIVAL  </a></div>
                    </div>

            </div>

            
    }

export default StreetFood;
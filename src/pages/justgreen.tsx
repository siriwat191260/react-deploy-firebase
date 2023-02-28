import React  from 'react';
import g1 from '../components/assets/GREEN/1.png';
import g2 from '../components/assets/GREEN/2.png';
import g3 from '../components/assets/GREEN/3.png';
import g4 from '../components/assets/GREEN/4.png';
import g5 from '../components/assets/GREEN/5.png';
import g6 from '../components/assets/GREEN/6.png';
import g7 from '../components/assets/GREEN/7.png';
import g8 from '../components/assets/GREEN/8.png';
import g9 from '../components/assets/GREEN/9.png';

const Justgreen = () => {
    return  <div>
                <div className="font-size-str margin-l-3"> JUST GREEN </div>
                <div className="font-size-str-intro margin-l-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, rem eos, iste quae ut, eaque accusamus odio ipsam nobis neque ratione. Molestiae debitis corrupti magnam nisi eligendi minima nobis dolores. </div>
                    <div className="row">
                        <div className='column_three'>
                            <img src={g1} alt=""/>
                        </div>
                        <div className='column_three'>
                            <img src={g2} alt=""/>
                        </div>
                        <div className='column_three'>
                            <img src={g3} alt="" />
                        </div>
                    </div>   
                
                    <div className="row">
                        <div className='column_three'>
                            <img src={g4} alt="" />
                        </div>
                        <div className='column_three'>
                            <img src={g5} alt=""/>
                        </div>
                        <div className='column_three'>
                            <img src={g6} alt=""/>
                        </div>
                    </div>   
                    

                    <div className="row">
                            <div className='column_three'>
                                <img src={g7} alt=""/>
                            </div>
                            <div className='column_three'>
                                <img src={g8} alt=""/>
                            </div>
                            <div className='column_three'>
                                <img src={g9} alt=""/>    
                            </div>
                    </div>
                
                    
               
                    <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/fashion"> ◄ YOU GET ME SO HIGH  </a></div>
                            <div className='font-size-b next' ><a href="/wayhome"> THE WAY HOME ► </a></div>
                    </div>
                
            </div>
}

export default Justgreen;
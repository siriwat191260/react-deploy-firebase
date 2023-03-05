import React  from 'react';
import f2 from '../components/assets/FASHION/2.png';
import f3 from '../components/assets/FASHION/3.png';
import f4 from '../components/assets/FASHION/4.png';
import f5 from '../components/assets/FASHION/5.png';
import f6 from '../components/assets/FASHION/6.png';
import f7 from '../components/assets/FASHION/7.png';
import f8 from '../components/assets/FASHION/8.png';
import f9 from '../components/assets/FASHION/9.png';



const Fashion = () => {
    return <div>
        <div className="font-size-str margin-l-3"> "YOU GET ME SO HIGH" </div>
                <div className="font-size-str-intro margin-l-12">"YOU GET ME SO HIGH", a fashion shooting with a concept of love couple with an "INEVITABLE BOND". </div>
                <div className="row margin-t-5">
                    <div className='column_str'>
                        <img src={f2} alt=""/>
                    </div>
                    <div className='column_str'>
                        <img src={f3} alt=""/>
                    </div>
                </div>   
            
                <div className="row">
                    <div className='column_str'>
                        <img src={f4} alt=""/>
                    </div>
                    <div className='column_str'>
                        <img src={f5} alt=""/>
                    </div>
                </div>   
                

                <div className="row">
                        <div className='column_str'>
                        <img src={f6} alt=""/>
                        </div>
                        <div className='column_str'>
                            <img src={f7} alt=""/>
                        </div>
                </div>
            
                <div className="row">
                        <div className='column_str'>
                            <img src={f8} alt=""/>
                        </div>
                        <div className='column_str'>
                            <img src={f9} alt=""/>
                        </div>
                </div>

                <div className='margin-l-3 margin-t-20'>
                        <div className='font-size-b next' ><a href="/justgreen"> JUST GREEN ► </a></div>
                </div>
            </div>
}   

export default Fashion;
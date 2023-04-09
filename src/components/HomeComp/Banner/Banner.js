import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate()
    const clickhandler = (value) => {
        navigate('/shop', {state : {
            category : value
        }})
    }
    return(
        <div className='bannerSection'>
            <div className='bsc' onClick={() => clickhandler('Men Collection')}>
                <img className='bscImg' src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="banner1"/>
                <div className='bannerOptions'>
                    <span>Chair</span>
                    <h4>Top Collection</h4>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className='bsc' onClick={() => clickhandler('Women Collection')}>
                <img className='bscImg' src="https://www.godrejinterio.com/imagestore/B2C/56101543SD00017/56101543SD00017_A2_1440x810.jpg" alt="banner2"/>
                <div className='bannerOptions'>
                    <span>Table</span>
                    <h4>Top Collection</h4>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
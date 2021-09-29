import React from 'react';
import '../App.css';
import  Button  from './Button';
import '../components/HeroSection.css';
import Videosrc from '../videos/video-2.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video  autoPlay loop muted>
            <source src={Videosrc} type="video/mp4"/>
              </video> 
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btn">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        WATCH TRAILER<i className='far fa-play-circle ' /></Button>

                </div>

            
        </div>
    )
}

export default HeroSection;

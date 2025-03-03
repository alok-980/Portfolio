import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

function Hero() {
    return (
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Alok Chauhan,</span> backend developer based in India.</h1>
            <p>I am frontend developer from mumbai, maharastra with 1 year of experience.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <dic className="hero-resume">My resume</dic>
            </div>
        </div>
    )
}

export default Hero
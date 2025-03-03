import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

function About() {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Backend Developer with over a decade of profectional experties in the field. Throughout my career, I have had the previlege of collabrating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for backend development is not only reflected in my extensive experience but also in the enthusiasm and dedicate I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%",}}/></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width: "70%",}}/></div>
                        <div className="about-skill"><p>javaScript</p><hr style={{width: "60%",}}/></div>
                        <div className="about-skill"><p>Node Js</p><hr style={{width: "50%",}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTs COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
import React from "react";
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0e65e049-70b7-4645-bba5-6acfb07e8671");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>xyz@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+772-660-324</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>mumbai, maharastra</p>
                        </div>
                    </div>
                </div>
                <form action="#" onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />

                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

                    <label htmlFor=""><span>{result}</span></label>
                    <button className="contact-submit" type="submit">Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

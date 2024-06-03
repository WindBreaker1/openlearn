// Maybe add a faq and statistics section.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGem, faLaptopCode, faHeart } from "@fortawesome/free-solid-svg-icons"

import "./About.css"
import LongCard from "../components/LongCard";

const About = () => {
  // change page title
  document.title = "About";

  const title1 = <div><FontAwesomeIcon icon={faGem} style={{color: "#74C0FC",}} /> Completely Free!</div>
  const description1 = "Everybody has the right to learn. As such, every resource is available for everyone, no matter your competency or region."

  const title2 = <div><FontAwesomeIcon icon={faLaptopCode} style={{color: "#2d9534",}} /> Learn By Doing</div>
  const description2 = "The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum."

  const title3 = <div><FontAwesomeIcon icon={faHeart} style={{color: "#B197FC",}} /> Open-Source And Communiy Driven</div>
  const description3 = "You can deepen your understanding and improve your GitHub skills by contributing to our open source curriculum."
  
  return (
    <div className='page' id="about-page">
      <h1 className="about-title">About</h1>
      <p className='about-text'>
        Unlock the world of computer programming with an array of expansive, 
        freely accessible, open-source resources tailored to learners of all levels.   
        We value collaboration and knowledge sharing as important tools harness the power of 
        open-source tools to master programming languages, frameworks, and technologies.
      </p>
      <h1 className="about-title">What you can expect at OpenLearn</h1>
      <div className="about-grid">
        <LongCard title={title1} description={description1} />
        <LongCard title={title2} description={description2} />
        <LongCard title={title3} description={description3} />
      </div>
      <div className="contact-section">
        <h1>Want to contact us?</h1>
        <p>Connect with our friendly community on discord, or send us an email.</p>
        <div className="contact-button-section">
          <button><FontAwesomeIcon icon={faDiscord} /> Chat on Discord</button>
          <button><FontAwesomeIcon icon={faEnvelope} /> Send us an email</button>
        </div>
      </div>
      <div className="donation-section">
        <h1>Want to donate?</h1>
        <p>
          If you want to give back to our community, you can do so by 
          contributing to our open source projects, or by supporting us financially.
        </p>
        <button><FontAwesomeIcon icon={faPatreon} /> Donate</button>
      </div>
    </div>
  )
}

export default About;
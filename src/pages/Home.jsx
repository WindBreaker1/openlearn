// enable linking between pages
import { Link } from "react-router-dom"
// importing card and story-card
import { Card } from "../components/Card"
import { StoryCard } from "../components/StoryCard"
// fontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faCheckToSlot, faChalkboardUser, faComputer, faC, faCheck, faCode } from "@fortawesome/free-solid-svg-icons"
import { faUnity, faJava, faJs, faPatreon } from "@fortawesome/free-brands-svg-icons"
// importing images
import testimonialImage1 from "../assets/testimonial-person1.png"
import testimonialImage2 from "../assets/testimonial-person2.png"
import testimonialImage3 from "../assets/testimonial-person3.png"
import testimonialImage4 from "../assets/testimonial-person4.png"
import learnImage from "../assets/learn.jpg"
import ideaExp from "../assets/idea-exp.jpg"
import greenChart from "../assets/green-chart.jpg"

// importing CSS
import "./Home.css"

const Home = () => {
  document.title = "OpenLearn";

  // how it works section
  const icon1 = <FontAwesomeIcon icon={faCheckToSlot} style={{color: "#20cf95",}} />;
  const title1 = 'Choose';
  const desc1 = 'Choose your desired programming language or tool by completing a short survey.';

  const icon2 = <FontAwesomeIcon icon={faChalkboardUser} style={{color: "#4b80dd",}} />;
  const title2 = 'Learn';
  const desc2 = 'Learn from a curriculum with the best curated online tutorials, blogs, and courses.';

  const icon3 = <FontAwesomeIcon icon={faComputer} style={{color: "#fb7228",}} />;
  const title3 = 'Build';
  const desc3 = 'Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.';

  // curriculum section
  const iconUnity = <FontAwesomeIcon icon={faUnity} style={{color: "#4f589c",}} />;
  const titleUnity = 'Unity/C#'

  const iconJs = <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />;
  const titleJs = 'JavaScript'

  const iconJava = <FontAwesomeIcon icon={faJava} style={{color: "#ff622e",}} />;
  const titleJava = 'Java'
  
  // testimonials section
  const img1 = testimonialImage1;
  const text1 = <p><b>Emily Johnson</b><br />An incredible self-paced curriculum that consists of the best resources for learning programming on the web!</p>;

  const img2 = testimonialImage2;
  const text2 = <p><b>Liam Williams</b><br />Before I started OpenLearn I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a...</p>;

  const img3 = testimonialImage3;
  const text3 = <p><b>James Smith</b><br />I've been using OpenLearn for a few months now and I'm really enjoying it. I've learned so much and I'm excited to continue learning!</p>;

  const img4 = testimonialImage4;
  const text4 = <p><b>Olivia Brown</b><br />I always wanted to learn how to code, but never had the motivation. OpenLearn has made it so fun to learn that a love for computer programming...</p>;

  // animate cards on scroll
  window.addEventListener('scroll', function() {
    const sections = ['#second-home-section .card-grid', '#third-home-section .card-grid', '#fourth-home-section .card-grid'];
  
    sections.forEach((section) => {
      const element = document.querySelector(section);
      const elementTop = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (elementTop <= screenHeight) {
        element.classList.add('animate');
      }
    });
  });

  return (
    <div id="home-page">
      <div id="first-home-section">
        <h1>Free, open-source learning for <span className="highlight">everyone.</span></h1>
        <p className="header-description">
          Whether you're interested in a career in computer science, or just
          want to learn coding for fun, OpenLearn is the place to do it.
        </p>
        <Link to="/curriculum"><button><FontAwesomeIcon icon={faBuildingColumns} /> View Our Curriculum</button></Link>    
      </div>
      <div id="second-home-section">
        <h1>How It Works</h1>
        <div className="card-grid">
          <Card icon={icon1} title={title1} desc={desc1} />
          <Card icon={icon2} title={title2} desc={desc2} />
          <Card icon={icon3} title={title3} desc={desc3} />
        </div>
      </div>
      <div id="experience-home-section">
        <h1>Making Learning <span className="rainbow-highlight">More Fun!</span></h1>
        <div className="long-container">
          <img src={learnImage} alt="" />
          <h2>Learn and build new projects!</h2>
        </div>
        <div className="long-container">
          <h2>Every lesson and exercise you complete gives you experience!</h2>
          <img src={ideaExp} alt="" />
        </div>
        <div className="long-container">
          <img src={greenChart} alt="" />
          <h2>Level up and unlock new things!</h2>
        </div>
      </div>
      <div id="third-home-section">
        <h1>Look At Some of Our Resources</h1>
        <div className="card-grid">
          <Link to='/curriculum/unity' style={{color: '#fff'}}><Card icon={iconUnity} title={titleUnity} /></Link>
          <Link to='/curriculum/java' style={{color: '#fff'}}><Card icon={iconJava} title={titleJava} /></Link>
          <Link to='/curriculum/javascript' style={{color: '#fff'}}><Card icon={iconJs} title={titleJs} /></Link>
        </div>
        <Link to='/curriculum'><button><FontAwesomeIcon icon={faCode} /> See All Programming Languages</button></Link>
      </div>
      <div id="fourth-home-section">
        <h1>Success Stories</h1>
        <div className="card-grid">
          <StoryCard img={img1} text={text1} />
          <StoryCard img={img2} text={text2} />
          <StoryCard img={img3} text={text3} />
          <StoryCard img={img4} text={text4} />
        </div>
        <Link to="/register"><button><FontAwesomeIcon icon={faCheck} /> Start Now!</button></Link>
      </div>
      <div className="donation-section">
        <h1>Want to donate?</h1>
        <p>
          If you want to give back to our community, you can do so by supporting us financially.
        </p>
        <button><FontAwesomeIcon icon={faPatreon} /> Donate</button>
        <br />
      </div>
    </div>
  )
}

export default Home;
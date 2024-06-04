import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faPatreon } from "@fortawesome/free-brands-svg-icons";
import LongCard from "../components/LongCard"

export default function Contribute() {
  document.title = 'Contribute';

  const title1 = <div><FontAwesomeIcon icon={faCodeBranch} style={{color: "#cb6cad",}} /> Contribute to the Curriculum</div>;
  const description1 = <div>The curriculum consists of the lessons and projects on this site. <br /> We are constantly expanding and updating the curriculum to keep it current and ensure it meets our students' needs in the ever changing world of web development. <br /> Our goal is to create the best free web development curriculum in the world, anyone is welcome to join in and help us in striving for this goal.</div>;

  const title2 = <div><FontAwesomeIcon icon={faCoins} style={{color: "#65e686",}} /> Contribute Financially</div>;
  const description2 = <div>OpenLearn is a free resource for everyone. <br /> We are able to provide this service because of the generous donations from our community. <br /> If you would like to help us continue to provide this service, please consider donating to our Patreon.</div>;
  
  return (
    <div className='page'>
      <h1 style={{textAlign: 'center'}}>How to Contribute</h1>
      <p style={{textAlign: 'center'}}>
      OpenLearn is an open-source project, built and maintained by dedicated volunteers. We are always working on projects to improve OpenLearn and are always looking for people who want to join our growing team of maintainers.
      </p>
      <LongCard title={title1} description={description1} />
      <LongCard title={title2} description={description2} />
      <div className="contribute-section">
        <h1>Contribute to the Curriculum</h1>
        <p>
          Contribute to the website and the curriculum through our GitHub repository. We are always looking for new lessons, projects, and resources to add to the curriculum.
        </p>
        <a href="https://github.com/WindBreaker1/openlearn" target="_blank" rel="noopener noreferrer">
          <button><FontAwesomeIcon icon={faGithub} /> Contribute</button>
        </a>
        <br />
      </div>
      <div className="donation-section">
        <h1>Want to donate?</h1>
        <p>
          Donate to OpenLearn through our Patreon page. Every dollar counts toward helping us provide free, open-source resources to everyone.
        </p>
        <button><FontAwesomeIcon icon={faPatreon} /> Donate</button>
        <br />
      </div>
    </div>
  )
}

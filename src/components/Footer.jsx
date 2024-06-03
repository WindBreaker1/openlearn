import "./Footer.css"
// Imported icons from: https://fontawesome.com/
// Tutorial on React icons: https://dev.to/slimpython/how-to-install-and-use-font-awesome-icons-in-react-js-easily-28g0
// Tutorial on social media icons: https://www.youtube.com/watch?v=oHmz42qRfho
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div className="footer">
      <div className="social-media-nav">
        <ul>
          <li>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faSquareXTwitter} className="icon" id="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="http://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}  className="icon" id="github-icon" />
            </a>
          </li>
          <li>
            <a href="http://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord}  className="icon" id="discord-icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright-text">© {year} OpenLearn. All rights reserved.</p>
    </div>
  )
}

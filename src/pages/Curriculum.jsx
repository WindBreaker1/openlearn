import './Curriculum.css';
import { Link } from 'react-router-dom';
import { Card } from "../components/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faDatabase, faGem, faBlog, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faPython, faJava, faUnity, faJs, faHtml5, faCss3Alt, 
  faPhp, faReact, faSwift, faRust, faKorvue, faGolang,
} from "@fortawesome/free-brands-svg-icons"

export default function Curriculum() {
  document.title = 'Curriculum';

  class CurriculumCard {
    constructor(title, icon) {
      this.title = title;
      this.icon = icon;
    }
  }

  const cardPy = new CurriculumCard('Python', <FontAwesomeIcon icon={faPython} style={{color: "#ddd72c",}} />);
  const cardC = new CurriculumCard('C/C++', <FontAwesomeIcon icon={faC} style={{color: "#1160e8",}} />);
  const cardJava = new CurriculumCard('Java', <FontAwesomeIcon icon={faJava} style={{color: "#ff622e",}} />);
  const cardUnity = new CurriculumCard('Unity/C#', <FontAwesomeIcon icon={faUnity} style={{color: "#4f589c",}} />);
  const cardHTML = new CurriculumCard('HTML', <FontAwesomeIcon icon={faHtml5} style={{color: "#eb6f0a",}} />);
  const cardCSS = new CurriculumCard('CSS', <FontAwesomeIcon icon={faCss3Alt} style={{color: "#74C0FC",}} />);
  const cardJavaScript = new CurriculumCard('JavaScript', <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />);
  const cardReact = new CurriculumCard('React', <FontAwesomeIcon icon={faReact} style={{color: "#0091ff",}} />);
  const cardSQL = new CurriculumCard('SQL', <FontAwesomeIcon icon={faDatabase} style={{color: "#879ec4",}} />);
  const cardPhp = new CurriculumCard('PHP', <FontAwesomeIcon icon={faPhp} style={{color: "#5372d0",}} />);
  const cardRuby = new CurriculumCard('Ruby', <FontAwesomeIcon icon={faGem} style={{color: "#e70d23",}} />);
  const cardSwift = new CurriculumCard('Swift', <FontAwesomeIcon icon={faSwift} style={{color: "#ed811d",}} />);
  const cardRust = new CurriculumCard('Rust', <FontAwesomeIcon icon={faRust} style={{color: "#5f6167",}} />);
  const cardKotlin = new CurriculumCard('Kotlin', <FontAwesomeIcon icon={faKorvue} style={{color: "#c77ee2",}} />);
  const cardGo = new CurriculumCard('Go/Golang', <FontAwesomeIcon icon={faGolang} style={{color: "#42a5f0",}} />);
  const cardOther = new CurriculumCard('Other', <FontAwesomeIcon icon={faBlog} />);

  return (
    <div className='curriculum-page'>
      <h1>Curriculum</h1>
      <p>Here is a list of all our resources on these programming languages.</p>
      <p>
        If you already know what you want to learn, just click on the one 
        you're interested in and start learning!
      </p>
      <p>
        Otherwise, you can take a <Link to='/survey'><b>short survey</b> </Link> 
        and see what programming language is best for you!
      </p>
      <p>
        You can also check out the <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener noreferrer">TIOBE Index</a>.
      </p>
      <p style={{padding: '0 200px 0 200px'}}>
        The TIOBE Index is an indicator of the popularity of programming languages. 
        It is a monthly gauge of programming language popularity, reflecting how 
        often the languages are searched on various search engines. The index is 
        calculated from the number of search engine results for queries containing 
        the name of the language.
      </p>
      <h2>⭐Happy Learning!⭐</h2>
      <div className="curriculum-card-grid">
        <Link to='/curriculum/python'><Card icon={cardPy.icon} title={cardPy.title} /></Link>
        <Link to='/curriculum/c++'><Card icon={cardC.icon} title={cardC.title} /></Link>
        <Link to='/curriculum/java'><Card icon={cardJava.icon} title={cardJava.title} /></Link>
        <Link to='/curriculum/unity'><Card icon={cardUnity.icon} title={cardUnity.title} /></Link>
        <Link to='/curriculum/html'><Card icon={cardHTML.icon} title={cardHTML.title} /></Link>
        <Link to='/curriculum/css'><Card icon={cardCSS.icon} title={cardCSS.title} /></Link>
        <Link to='/curriculum/javascript'><Card icon={cardJavaScript.icon} title={cardJavaScript.title} /></Link>
        <Link to='/curriculum/react'><Card icon={cardReact.icon} title={cardReact.title} /></Link>
        <Link to='/curriculum/sql'><Card icon={cardSQL.icon} title={cardSQL.title} /></Link>
        <Link to='/curriculum/php'><Card icon={cardPhp.icon} title={cardPhp.title} /></Link>
        <Link to='/curriculum/ruby'><Card icon={cardRuby.icon} title={cardRuby.title} /></Link>
        <Link to='/curriculum/swift'><Card icon={cardSwift.icon} title={cardSwift.title} /></Link>
        <Link to='/curriculum/rust'><Card icon={cardRust.icon} title={cardRust.title} /></Link>
        <Link to='/curriculum/kotlin'><Card icon={cardKotlin.icon} title={cardKotlin.title} /></Link>
        <Link to='/curriculum/go'><Card icon={cardGo.icon} title={cardGo.title} /></Link>
        <Link to='/curriculum/other'><Card icon={cardOther.icon} title={cardOther.title} /></Link>
      </div>
    </div>
  )
}

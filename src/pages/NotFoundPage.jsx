import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  document.title = '404 - Not Found'
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '100px',
      marginBottom: '100px' }}>
      <FontAwesomeIcon icon={faSquareXmark} style={{color: "#cb2020", fontSize: '82px'}} />
      <h1 style={{textDecoration: 'underline'}}>404 not found</h1>
      <h2><Link to='/'>Home</Link></h2>
    </div>
  )
}

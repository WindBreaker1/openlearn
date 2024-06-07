import './Header.css';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBars, faX, faWandMagicSparkles, faFire } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { user, } = useContext(UserContext);

  return (
    <header className="header">
      {/* site title */}
      <h1 className="site-title">
        <Link className='site-title-link' to='/'><FontAwesomeIcon icon={faLaptopCode} />OpenLearn</Link>
      </h1>
      {/* if user is not logged in, display the stuff below */}
      {!user && (
        <nav className='navbar'>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contribute'>Contribute</Link></li>
            <li><Link to='/curriculum'>Curriculum</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'><button className='register-button'><FontAwesomeIcon icon={faWandMagicSparkles} /> Register Now</button></Link></li>
          </ul>
        </nav>
      )}
      {/* if user is logged in, display the stuff below */}
      {!!user && (
        <nav className='navbar'>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contribute'>Contribute</Link></li>
            <li><Link to='/curriculum'>Curriculum</Link></li>
            <li><Link to='/daily-exercise'>Daily</Link></li>
            <li><Link to='/leaderboard'>Leaderboard</Link></li>
            <li>
              <div>
                <Link className={`user-component-column ${user.rank ? user.rank.toLowerCase() : ''}-rank`} to='/dashboard'>
                  <div className='user-component-row'>
                    <div>{user.name}</div>
                    <div>Level: {user.level}</div>
                    <div>Exp: {user.experience}</div>
                    <div><FontAwesomeIcon icon={faFire} style={{color: "#d9540d",}} />: {user.streak}</div>
                  </div>
                  <div className="progress-bar-header">
                    <div className="progress-bar-header-filled" style={{ width: `${(user.experience % 10) * 10}%` }}></div>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
      {/* ... */}
    </header>
  )
}

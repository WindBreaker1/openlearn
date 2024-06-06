import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";
import ExpButton from "../components/ExpButton";
import './Dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faKey, faLayerGroup, faAsterisk, faPercent, faPersonWalkingArrowRight, faFire, faSnowflake, faTrophy, faSquarePen, faPersonChalkboard, faClipboardQuestion, faTableList } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logOut, } = useContext(UserContext);

  // functie pentru schimbarea titlului paginii in funcite de numele userului
  function changeSiteTitle() {
    if (user) {
      document.title = `${user.name} | Dashboard`;
    } else {
      document.title = `Dashboard`;
    }
  }
  changeSiteTitle();

  function changeRankIcon(rank) {
    switch (rank) {
      case 'Bronze':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#d47a25",}} />);
      case 'Silver':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#b0b0b0",}} />);
      case 'Gold':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#e9c649",}} />);
      case 'Platinum':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#9edadb",}} />);
      case 'Diamond':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#2170c4",}} />);
      case 'Master':
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#d51f0b",}} />);
      default:
        return (<FontAwesomeIcon icon={faTrophy} style={{color: "#d47a25",}} />);
    }
  }

  let rankIcon = user ? changeRankIcon(user.rank) : null;

  return (
    <div className="dashboard-page">
      {/* if user is not logged in, display the stuff below */}
      {!user && (
        <div className="dashboard-not-logged-in">
          <h1>Dashboard</h1>
          <h2>Please register or login to view your dashboard.</h2>
          <p>If you're logged in, but the dashboard isn't showing, reload the page.</p>
          <div className="button-section">
            <Link to='/register'><button><FontAwesomeIcon icon={faIdCard} /> Register</button></Link>
            <Link to='/login'><button><FontAwesomeIcon icon={faKey} /> Login</button></Link>
          </div>
        </div>
      )}
      {/* if user is logged in, display the stuff below */}
      {!!user && user.isAdmin === true && (
        <div className="dashboard-logged-in">
          <div className="account-info">
            <h1>😎 Admin Panel</h1>
          </div>
          <div className="account-info">
            <p>Add new lessons.</p>
            <Link to='/add-lesson'><button><FontAwesomeIcon icon={faSquarePen} /> Add Lesson</button></Link>
          </div>
          <div className="account-info">
            <p>View all lessons.</p>
            <Link to='/admin-lessons'><button><FontAwesomeIcon icon={faPersonChalkboard} /> View Lessons</button></Link>
          </div>
          <div className="account-info">
            <p>Add daily exercises.</p>
            <Link to='/add-daily'><button><FontAwesomeIcon icon={faClipboardQuestion} /> Add Daily Exercises</button></Link>
          </div>
          <div className="account-info">
            <p>View daily exercises.</p>
            <Link to='/admin-daily'><button><FontAwesomeIcon icon={faTableList} /> View Daily Exercises</button></Link>
          </div>
        </div>
      )}
      {!!user && (
        <div className="dashboard-logged-in">
          <div className="account-info">
            <h1>👋 Hello, {user.name}!</h1>
          </div>
          <div className="account-info">
            <div><b>Email:</b> <br /> {user.email}</div>
          </div>
          <div className="account-info">
            <div><b>Name: <br /> </b>{user.name}</div>
          </div>
          <div className="account-info column">
            <h2><FontAwesomeIcon icon={faFire} style={{color: "#d9540d",}} /> Current Streak: {user.streak}</h2>
          </div>
          <div className="account-info column">
            <h2><FontAwesomeIcon icon={faSnowflake} style={{color: "#8caeca",}} /> Best Streak: {user.bestStreak}</h2>
          </div>
          <div className="account-info column">
            <h2>{rankIcon || 'Loading...'} Rank: {user.rank}</h2>
          </div>
          <div className="account-info column">
            <h2><FontAwesomeIcon icon={faLayerGroup} style={{color: "#65ace2",}} /> Level: {user.level}</h2>
          </div>
          <div className="account-info column">
            <h2><FontAwesomeIcon icon={faAsterisk} style={{color: "#63E6BE",}} /> Experience: {user.experience}</h2>
          </div>
          <div className="account-info column">
            <h2><FontAwesomeIcon icon={faPercent} style={{color: "#c2b41e",}} /> Experience needed for next level: {10 - (user.experience % 10)}!</h2>
            <div className="progress-bar">
              <div className="progress-bar-filled" style={{ width: `${(user.experience % 10) * 10}%` }}></div>
            </div>
          </div>
          <div className="account-info">
            <p><b>Log Out</b></p>
            <button onClick={logOut}><FontAwesomeIcon icon={faPersonWalkingArrowRight} /> Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}
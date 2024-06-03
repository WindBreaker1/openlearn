import './Leaderboard.css';
import { useState, useEffect } from "react";
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrophy, faIdCardClip, faAsterisk, faLayerGroup, faRankingStar } from '@fortawesome/free-solid-svg-icons';

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/leaderboard');
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faTrophy} style={{color: "#FFD43B",}} /> Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th><FontAwesomeIcon icon={faRankingStar} style={{color: "#de8117",}} /> Number</th>
            <th><FontAwesomeIcon icon={faIdCardClip} style={{color: "#B197FC",}} /> Name</th>
            <th><FontAwesomeIcon icon={faAsterisk} style={{color: "#63E6BE",}} /> Experience</th>
            <th><FontAwesomeIcon icon={faLayerGroup} style={{color: "#74C0FC",}} /> Level</th>
            <th><FontAwesomeIcon icon={faTrophy} style={{color: "#FFD43B",}}/> Rank</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.experience}</td>
              <td>{user.level}</td>
              <td>{user.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

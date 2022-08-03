// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, teamImageUrl, id} = teamDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard

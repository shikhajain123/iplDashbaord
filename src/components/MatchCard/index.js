// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="logo"
        />
        <p className="competing-team-heading">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`match-status ${matchStatus}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard

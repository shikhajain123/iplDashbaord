// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      umpires,
      result,
      venue,
      competingTeam,
      manOfTheMatch,
      date,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-container">
              <p className="competing-team-heading">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="venue">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info-container">
            <div className="match-info">
              <p className="label">First Innings</p>
              <p className="value">{firstInnings}</p>
            </div>
            <div className="match-info">
              <p className="label">Second Innings</p>
              <p className="value">{secondInnings}</p>
            </div>
            <div className="match-info">
              <p className="label">Man Of The Match</p>
              <p className="value">{manOfTheMatch}</p>
            </div>
            <div className="match-info">
              <p className="label">Umpires</p>
              <p className="value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch

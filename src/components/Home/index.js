// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    // console.log(teamData)
    const formattedTeamsList = teamData.teams.map(eachTeam => ({
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
      id: eachTeam.id,
    }))
    this.setState({teamsList: formattedTeamsList, isLoading: false})
  }

  renderLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderIplTeamsList = () => {
    const {teamsList} = this.state

    return (
      <ul className="teams-list-container">
        {teamsList.map(team => (
          <TeamCard key={team.id} teamDetails={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoading() : this.renderIplTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home

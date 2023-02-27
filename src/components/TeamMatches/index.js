import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {matchData: {}, isActive: true}

  componentDidMount() {
    this.matchData()
  }

  matchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    //  console.log(data)

    const strigfiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({matchData: strigfiedData, isActive: false})
  }

  render() {
    const {matchData, isActive} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(matchData)
    const {latestMatchDetails, recentMatches} = matchData
    const imgUrl = matchData.teamBannerUrl
    const matchDetails = latestMatchDetails
    // console.log(matchDetails)
    // console.log(recentMatches)
    return (
      <div className={`cont ${id}`}>
        {isActive ? (
          <div className="spin" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="img-cont">
              <img src={imgUrl} alt="team banner" className="banner" />
            </div>
            <LatestMatch match={matchDetails} />
            <ul className="list-cont">
              {recentMatches.map(each => (
                <MatchCard item={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches

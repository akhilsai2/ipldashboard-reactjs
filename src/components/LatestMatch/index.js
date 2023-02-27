import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {match} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = match
    //  console.log(competingTeam)

    return (
      <div className="latest-cont">
        <p className="latest-head">Latest Matches</p>
        <div className="ipl-cont">
          <div className="match-cont">
            <div className="detail-cont">
              <p className="competing-team-head">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`Latest Match ${competingTeam}`}
              className="image1"
            />
          </div>
          <hr />
          <div className="inning-cont">
            <p className="inning-para">First Innings</p>
            <p className="team-para">{firstInnings}</p>
            <p className="inning-para">Second Innings</p>
            <p className="team-para">{secondInnings}</p>
            <p className="inning-para">Man Of The Match</p>
            <p className="team-para">{manOfTheMatch}</p>
            <p className="inning-para">Umpires</p>
            <p className="team-para">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch

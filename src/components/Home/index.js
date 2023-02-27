import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {iplData: [], isLoad: true}

  componentDidMount() {
    this.teamData()
  }

  teamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(formattedData)
    this.setState({iplData: formattedData, isLoad: false})
  }

  render() {
    const {iplData, isLoad} = this.state
    //  console.log(iplData)
    return (
      <div className="bgContainer">
        {isLoad ? (
          <div className="loader" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="head-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="team-cont">
              {iplData.map(each => (
                <TeamCard key={each.name} item={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home

import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    const {name, id, teamImageUrl} = item
    return (
      <Link className="link" to={`/team-matches/${id}`}>
        <li className="item-cont">
          <img src={teamImageUrl} alt={name} className="image" />
          <p className="team">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard

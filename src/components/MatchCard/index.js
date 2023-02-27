import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = item
  let change
  if (matchStatus === 'Lost') {
    change = 'changeColor'
  }
  return (
    <li className="sub-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="sub-image"
      />
      <p className="sub-head">{competingTeam}</p>
      <p className="sub-para">{result}</p>
      <p className={`sub-status ${change}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

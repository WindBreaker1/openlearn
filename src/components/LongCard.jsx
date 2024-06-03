// css
import "./LongCard.css"

const LongCard = (props) => {
  const { title, description } = props;
  
  return (
    <div className="long-card">
      <div className="lg-content">
        <h2 className="lg-title">{title}</h2>
        <div className="lg-description">{description}</div>
      </div>
    </div>
  )
}

export default LongCard;
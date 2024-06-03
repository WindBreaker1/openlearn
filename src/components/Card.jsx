// css
import "./Card.css"

export const Card = (props) => {
  const {icon, title, desc} = props;
  
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <div className="card-desc">{desc}</div>
    </div>
  )
}

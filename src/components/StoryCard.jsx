// css
import "./StoryCard.css"

export const StoryCard = (props) => {
  const {img, imgAlt, text} = props;
  
  return (
    <div className="story-card">
      <img src={img} alt={imgAlt} className="story-card-image" />
      <div className="story-card-text">{text}</div>
    </div>
  )
}

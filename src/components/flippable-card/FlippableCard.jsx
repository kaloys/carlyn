import { useState } from "react"
import './flippable-card.css'
import myPhoto from "../../assets/images/test.jpg"

export const FlippableCard = () => {
const [flipped, setFlipped] = useState(false);

  return (
    <div className="scene" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "is-flipped" : ""}`}>
        <div className="card__face card__face--front" style={{ background: "" }}>
          <img src={myPhoto} alt='front' className='card-image'/>
        </div>
        <div className="card__face card__face--back">
          <h2>BACK</h2>
        </div>
      </div>
    </div>
  )
}

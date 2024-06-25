/* eslint-disable react/prop-types */
import { useState } from "react";


const EmojiCard=(props)=>{
  let [seeMore, setSeeMore] = useState(true)

  function handleSeeMore(){
    setSeeMore(prevState=>!prevState)
  }

  let meaning = props.emojiMeaning.slice(0,30) + "..."

return(
    <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emojiPic}
      </span>
      <span>{props.emojiName}</span>
    </dt>
    <dd>
     {seeMore? meaning : props.emojiMeaning}
    </dd>
    <button onClick={handleSeeMore}>{seeMore? "see more":"see less"}</button>
  </div>
)

}

export default EmojiCard;
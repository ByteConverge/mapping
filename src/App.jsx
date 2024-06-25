import emojipedia from './emojiPedia';
import EmojiCard from './components/EmojiCard';
import { useState } from 'react';
import './App.css';


const App=()=> {
const [isShown,setIsShown] = useState(true)
  

console.log(emojipedia)

let filteredEmoji =emojipedia.filter((emoji)=>{
 if(emoji.name[0].toLowerCase() === "t" || emoji.name[0].toLowerCase() === "p"){
  return emoji
 }
})

let sliced = emojipedia.slice(0,2)

console.log(filteredEmoji)

function handleIsShown(){
  setIsShown(prevState => !prevState)
}


  return (
    <div>
      <img src="Xlogo.svg" alt="" />
    <h1>
      <span>emojipedia 
      </span>
    </h1>

    <dl className="dictionary">
    
      {isShown? sliced.map((emoji)=>{
      return   <EmojiCard key={emoji.id} emojiName={emoji.name} emojiPic={emoji.emoji} emojiMeaning={emoji.meaning} />
      }) :  emojipedia.map((emoji)=>{
        return   <EmojiCard key={emoji.id} emojiName={emoji.name} emojiPic={emoji.emoji} emojiMeaning={emoji.meaning} />
        })}
    </dl>
    <button onClick={handleIsShown}>{isShown? "Show more" : "show less"}</button>
  </div>
  )
}

export default App

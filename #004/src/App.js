import React from "react"
import Joke from "./Joke"
import JokeData from "./JokeData"

function App(){

  const JokeComponent = JokeData.map(joke =>{
    return (
      <Joke key={joke.id} Question={joke.Question}  Answer={joke.Answer}/>
    )
  })
  return(
    <div clasName="main">
      {JokeComponent}
    </div>
  )
}
export default App

import React from "react"
import Joke from "./Joke"
import "./App.css"
function App(){
  return(
    <div clasName="main">
      <Joke 
      Question="What is React?"
      Answer="React is a front-end JavaScript library developed by Facebook in 2011."
      />
      <Joke 
      Question="What are the features of React?"
      Answer="It uses the virtual DOM instead of the real DOM."
      />
      <Joke 
      Question="List some of the major advantages of React."
      Answer="It can be conveniently used on the client as well as server side."
      />
      <Joke 
      Question="What are the limitations of React?"
      Answer="It can be little difficult for the novice programmers to understand."
      />
      <Joke 
      Question="What is JSX?"
      Answer="JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance."
      />
      <Joke 
      
      Answer="React is a front-end JavaScript library developed by Facebook in 2011."
      />
      <Joke 
      Question="What do you understand by Virtual DOM? Explain its working."
      Answer="A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system."
      />
    </div>
  )
}
export default App

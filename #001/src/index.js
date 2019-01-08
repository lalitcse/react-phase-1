import React from "react"
import ReactDOM from "react-dom"

function App(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "Evening"
    } else {
        timeOfDay = "Good Night"
    }

    const styles = {
        background: "blue",
        fontSize: 100
    }

    return(
        <div>
            <h1 style={styles}>{timeOfDay}</h1>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))

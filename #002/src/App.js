import React from "react"
import ContactCard from "./ContactCard"
function App(){
  return(
      <div className="contact-list">
          <ContactCard contact={{name: "Lalit kumar", imageUrl: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80", phone:"333-555-789", email: "reacttest@gmail.com"}}/>
          <ContactCard contact={{name: "Anil yadav", imageUrl: "https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", phone:"333-111-789", email: "aniltest@gmail.com"}}/>
          <ContactCard contact={{name: "Mukesh Bhat", imageUrl: "https://images.unsplash.com/photo-1461681334529-b7210750c909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", phone:"456-555-789", email: "mukeshtest@gmail.com"}}/>
          <ContactCard contact={{name: "Sonu yadav", imageUrl: "https://images.unsplash.com/photo-1485282569499-bc24811e75ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", phone:"159-753-789", email: "sonutest@gmail.com"}}/>
          
      </div>
  )
}

export default App

import User from "./User"
import UserClass from "./UserClass"
import React from "react"

 class About extends React.Component{
  constructor(props){
    super(props)
   this.state={
    
   }
  }

render(){

    return (
        <div>
            <h1>About</h1>
            <h2>This is React Namaste Web Series</h2>
            {/* <User name="Aditya function()"/> */}

            <UserClass />
            
        </div>
    )
}

}


export default About

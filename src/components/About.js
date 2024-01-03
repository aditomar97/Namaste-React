import User from "./User"
import UserClass from "./UserClass"
import React from "react"

 class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent")
  }
  componentDidMount(){
    console.log("Parent class")
  }
render(){
    console.log("Parent Render")
    return (
        <div>
            <h1>About</h1>
            <h2>This is React Namaste Web Series</h2>
            {/* <User name="Aditya function()"/> */}

            <UserClass name={"First"} location={"Greater Noida"}/>
            <UserClass name={"Second "} location={"Greater Noida"}/>
        </div>
    )
}

}


export default About

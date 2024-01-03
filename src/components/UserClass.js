import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            name:"Dummy",
            location:"Dummy Location"
       }
    };

  }
  async componentDidMount(){
    const data= await fetch('https://api.github.com/users/aditomar97')
    const info =await data.json()
    this.setState({
      userInfo:info
    })
    console.log(info)
    }
  

  render() {
    const {name,location}=this.state.userInfo
  

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Contact:@aditomar97</h2>
      </div>
    );
  }
}
export default UserClass;

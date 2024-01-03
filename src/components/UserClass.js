import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name,"Constructor")
  }

  componentDidMount(){
    console.log(this.props.name,"ChildMount")
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name,"Render")
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>

        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Contact:@aditomar97</h2>
      </div>
    );
  }
}
export default UserClass;

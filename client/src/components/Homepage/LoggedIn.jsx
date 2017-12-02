import React from 'react';
 


class LoggedIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createRoomText: ''
    }
  }

  render() {
    return (
      <div>
      <p> Logged In! </p>
      <button onClick={()=> this.props.createRoom(this.state.createRoomText)}>Create Rooms: </button>
      <input onChange={(e)=> this.setState({createRoomText: e.target.value}) } placeholder={'enter new room name'}/>  
      </div>
    )
  }
}

export default LoggedIn;
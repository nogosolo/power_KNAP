import React from 'react';
import SiteNavBar from './SiteNavBar';
import Main from './Main';
// import LoginPage from './LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRooms: [{id:1, roomname:'first'}, {id:2, roomname:'second'}, {id:3, roomname:'third'} ,{id:4, roomname:'fourth'}],
      selectedRoom: {id:null, roomname:null},
    };
    this.selectRoom = this.selectRoom.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  selectRoom (id) {
    console.log('look, a room has been selected');
    this.setState({selectedRoom: id});
  }

  createRoom(roomname) {
    console.log('in the app',roomname);
  }

  render() {
    return (
      <div>
        <SiteNavBar />
        <Main roomList={this.state.allRooms} selectedRoom={this.state.selectedRoom}
        filterRooms={this.selectRoom} createRoom={this.createRoom}/>

      </div>
    );
  }
}

export default App;

import React from 'react';
import SiteNavBar from './SiteNavBar';
import Main from './Main';
import axios from 'axios';
import FBInfo from './FBInfo';


// import LoginPage from './LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRooms: [],//[{id:1, roomName:'first'}, {id:2, roomName:'second'}, {id:3, roomName:'third'} ,{id:4, roomName:'fourth'}],
      selectedRoom: {id:null, roomName:null},
      fbId: null, // if null, create room component is hidden. ex id '933778176778686'
      fbData: null
    };
    this.selectRoom = this.selectRoom.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.fbLoginSuccessful = this.fbLoginSuccessful.bind(this);
  }

  selectRoom (roomId) {
      this.setState({selectedRoom: {id: roomId},
      })
  }

  createRoom(roomName) {
    //post with roomName to server
    axios.post(`createRoom/${roomName}/${this.state.fbId}`,)
      .then((data) => {
        console.log('created room: ', roomName)
        this.setState({selectedRoom: data});
        //on success, refresh all rooms
      }).then(()=> this.getAllRooms())
        .catch((error)=> console.log('error on createRoom:', error))
  }

  getAllRooms() {
    axios.get('/allrooms')
      .then((data) => {
        console.log('HEY!!!!!!!!', data);
        this.setState({allRooms: data.data.reverse()});
      })
      .catch((err) => {console.log(err)})
  }

  componentDidMount() {
    this.getAllRooms()
  }

  fbLoginSuccessful(data) {
    console.log('WORKED LIKE A CHARM', data)
    this.setState({fbId:data.id, fbData:data});
  }

  render() {
    return (
      <div>
        <SiteNavBar fbLoginSuccessful={this.fbLoginSuccessful}/>
        <Main roomList={this.state.allRooms} selectedRoom={this.state.selectedRoom}
        selectRoom={this.selectRoom} createRoom={this.createRoom} fbId={this.state.fbId}/>

      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import Search from './Search.jsx';
import RoomList from './RoomList.jsx';
import Sidebar from './Sidebar.jsx';
import sampleVideoData from '../../../../database/sampleVideoData.js';
import RoomView from '../Room/RoomView.jsx';
import axios from 'axios';
import PreviewRoom from './RoomPreview.jsx';
import LoggedIn from './LoggedIn.jsx';
// import io from 'socket.io-client';
//
//
// const lobby = io('/lobby');

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: sampleVideoData[0].snippet.thumbnails.default.url,
      selectedRoom: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.props.fbId !== null ? <LoggedIn  createRoom = {this.props.createRoom}/> : <p>You are not logged in!</p>} 
        <h1>Browse Rooms</h1>
          <div className="wrapper">
            {!this.state.selectedRoom && (this.props.roomList.map((el, key) => (<Link id={el.id} key={key} to="/rooms"> <PreviewRoom ex={el.roomName}
            enterRoom={this.props.selectRoom} roomid={el.id} key={key} thumbnail={el.thumbnail}/> </Link> )))}
            {/*this.state.selectedRoom && (<RoomView id={this.state.selectedRoom}/>)*/}


          </div>

      </div>
    );
  }
}

export default Homepage;

// ReactDOM.render(<App />, document.getElementById('homepage'));

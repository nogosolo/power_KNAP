import React from 'react';
import ReactDOM from 'react-dom';
// import Search from './Search.jsx';
import RoomList from './RoomList.jsx';
import Sidebar from './Sidebar.jsx';
// import io from 'socket.io-client';
//
//
// const lobby = io('/lobby');

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomList: ['Room1', 'Room2', 'Room3'],
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Browse Rooms</h1>  
        <div class="wrapper">
          <div class="panel">Panel A</div>
          <div class="panel">Panel B</div>
          <div class="panel">Panel C</div>
          <div class="panel">Panel D</div>
          <div class="panel">Panel E</div>
          <div class="panel">Panel F</div>
          <div class="panel">Panel G</div>
          <div class="panel">Panel H</div>
          <div class="panel">Panel I</div>
          <div class="panel">Panel J</div>
        </div>
      </div>
    );
  }
}

export default Homepage;

// ReactDOM.render(<App />, document.getElementById('homepage'));

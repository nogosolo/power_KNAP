import React from 'react';
import ReactDOM from 'react-dom';
// import Search from './Search.jsx';
import RoomList from './RoomList.jsx';
import Sidebar from './Sidebar.jsx';
// import io from 'socket.io-client';
//
//
// const lobby = io('/lobby');

const PreviewRoom = (props) => (
  <div clasName="panel" onClick={()=> console.log('clicked!')}>
    <div className="op">
      <img  className={'pic5'} src={'https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg'}/> 
      <h1>Room Number {props.ex} </h1> 
    </div>
  </div>

)

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomList: [1,2,3,4,5,6,7,8],
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Browse Rooms</h1>  
          <div className="wrapper">
            {this.state.roomList.map((el,key) => <PreviewRoom ex={el} />)}
            

          </div>
      </div>
    );
  }
}

export default Homepage;

// ReactDOM.render(<App />, document.getElementById('homepage'));

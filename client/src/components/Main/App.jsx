import React from 'react';
import SiteNavBar from './SiteNavBar';
import Main from './Main';
// import LoginPage from './LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRooms: null,
      selectedRoom: null,
    };
    this.selectRoom = this.selectRoom.bind(this);
  }

  selectRoom (id) {
    console.log('look, a room has been selected');
    this.setState({selectedRoom: id});
  }

  render() {
    return (
      <div>
        <SiteNavBar />
        <Main roomlist={this.state.allRooms} selectedRoom={this.state.selectedRoom}
        filterRooms={this.selectRoom}/>

      </div>
    );
  }
}

export default App;

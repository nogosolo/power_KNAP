import React from 'react';
import axios from 'axios';

class FBInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   window.fbAsyncInit = function() {
    FB.init({
      appId      : '168772223720117',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
      });

    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }.bind(this);

  // Load the SDK asynchronously
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=168772223720117';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback(response) {

    if (response.status === 'connected') {
      //this.testAPI();
      document.getElementById('status').innerHTML = 'You are logged';
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  }

  getFBInfo() {
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
      console.log('get user fb info: ', response);

      axios.post(`/fbinfo/${response.id}/${response.first_name}/${response.last_name}`, {
        id: response.id,
        firstName: response.first_name,
        lastName: response.last_name
      })
      .then(function (response) {
        console.log('axios post success: ',response);
      })
      .catch(function (error) {
        console.log('axios post error: ',error);
      });
    });
  }

  render() {
    return(
      <div>
        <h4>FBInfo</h4>
        <button onClick={this.getFBInfo.bind(this)}>Get FB Info</button>
        <div id="status"></div>
      </div>
    )
  }
}

export default FBInfo;


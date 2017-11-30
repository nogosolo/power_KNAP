import React from 'react';

class FBLogin extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <body>
      <script>{
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '168772223720117',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.11'
          });
            
          FB.AppEvents.logPageView();  
           FB.getLoginStatus(function(response) {
            console.log('FB.getLoginStatus response:', response);
            if (response.status === 'connected') {
              document.getElementById('status').innerHTML = 'We are connected.';
              document.getElementById('login').style.visibility = 'hidden';
            } else if (response.status === 'not_authorized') {
              document.getElementById('status').innerHTML = 'You are not logged in.';
            } else {
              document.getElementById('status').innerHTML = 'You are not logged into facebook.';
            }
          })
            
        }

        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=168772223720117';
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));

        function checkLoginState() {
          FB.getLoginStatus(function(response) {
            //console.log('FB.getLoginStatus response:', response);
            if (response.status === 'connected') {
              document.getElementById('status').innerHTML = 'We are connected.';
              document.getElementById('login').style.visibility = 'hidden';
            } else if (response.status === 'not_authorized') {
              document.getElementById('status').innerHTML = 'We are not logged in.'
            } else {
              document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
            }
          });
        }

        function login() {
          FB.login(function(response) {
            if (response.status === 'connected') {
              document.getElementById('status').innerHTML = 'We are connected.';
              //document.getElementById('login').style.visibility = 'hidden';
            } else if (response.status === 'not_authorized') {
              document.getElementById('status').innerHTML = 'We are not logged in.'
            } else {
              document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
            }
          }, {scope: 'email'});
         }

        function getInfo() {
          FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
             document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url + "'>";
           });
         }
      }</script>

      <button onclick="getInfo()">Get info with picture</button>
      <button onclick="login()" id="login">Login</button>

      <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true" onlogin="checkLoginState();"></div>
    </body>

    )}}

export default FBLogin;
  // <div id="status"></div>
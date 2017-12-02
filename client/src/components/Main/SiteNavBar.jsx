import React from 'react';
import { Link } from 'react-router-dom';
import FBLoginBtn from './FBLoginBtn';
// import LoginButton from './LoginButton';
// import SearchBox from './SearchBox';

const SiteNavBar = (props) => (
<div>
  <div class="topnav" id="myTopnav">
    <a class="active"><Link to="/" >Home</Link></a>
    <a ><Link to="/rooms">Room</Link></a>
    <a ><Link to="/javi">JAVI LINK</Link></a>
    <a class="fbbtn"><FBLoginBtn /></a>
  </div>
</div>
)

export default SiteNavBar;


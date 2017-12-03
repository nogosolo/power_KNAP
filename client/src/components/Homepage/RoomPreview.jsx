import React from 'react';

const PreviewRoom = (props) => {
  return(
  <div className="panel" onClick={(event)=> {
    console.log('clicked!', props);
    props.enterRoom(props.roomid)
  }
}>
    <div className="op">
      <img  className={'pic5'} src={props.thumbnail ? props.thumbnail : 'https://fthmb.tqn.com/YkPnUnVlh2QwHrvyub2XzLsDID4=/735x0/ferret-face-56a2bd1b5f9b58b7d0cdfa14.jpg'}/>
      <h1>Room: {props.ex} </h1>
      {
        /*
        <h3>Currently Playing: {props.title} </h3>
        <h4>Host: {props.host} </h4>
        */
      }
    </div>
  </div>
  )
}

export default PreviewRoom;

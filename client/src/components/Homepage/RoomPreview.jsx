import React from 'react';

const PreviewRoom = (props) => {
  return(
  <div className="panel" onClick={(event)=> {
    console.log('clicked!', props);
    props.enterRoom(props.roomid)
  }
}>
    <div className="op">
      <img  className={'pic5'} src={props.image}/>
      <h1>Room: {props.ex} </h1>
      <h3>Currently Playing: {props.title} </h3>
    </div>
  </div>
  )
}

export default PreviewRoom;

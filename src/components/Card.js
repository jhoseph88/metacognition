import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../App.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="title-top">
        <h3 className="card-title">{props.post.title}</h3>
      </div>
      <div className="clickable-img">
        <img src={props.post.img} alt="latest podcast" width="100%"/>
        <FontAwesomeIcon
          icon={props.audioPlaying ? "pause-circle": "play-circle"}
          className="play-button"
          onClick={props.audioPlaying ? props.pauseAudio: props.playAudio}/>
      </div>
      <div className="title-bottom">
        <p className="card-body">
          {props.post.description.substring(0, 250) + '...'}
        </p>
      </div>
    </div>
  )
}

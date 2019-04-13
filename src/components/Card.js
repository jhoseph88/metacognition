import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CoverArt from './CoverArt.js'
import '../App.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="title-top">
        <h3 className="card-title">{props.post.title}</h3>
      </div>
      <CoverArt
        post={props.post}
        audioPlaying={props.audioPlaying}
        playAudio={props.playAudio}
        pauseAudio={props.pauseAudio}
        playingSrc={props.playingSrc}
        setSrc={props.setSrc}/>
      <div className="title-bottom">
        <p className="card-body">
          {props.post.description.substring(0, 250) + '...'}
        </p>
      </div>
    </div>
  )
}

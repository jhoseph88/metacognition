import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../App.css'

export default function CoverArt(props) {
  return (
    <div className="clickable-img">
      <img src={props.post.img} alt="latest podcast" width="100%"/>
      <FontAwesomeIcon
        icon={props.audioPlaying && props.playingSrc === props.post.src ?  "pause-circle": "play-circle"}
        className="play-button"
        onClick={() => {
          console.log("audioPlaying: " + props.audioPlaying)
          console.log("src: " + props.post.src)
          if (props.audioPlaying) {
            if (props.playingSrc === props.post.src) {
              props.pauseAudio()
            } else {
              props.setSrc(props.post.src)
            }
          } else {
            props.setSrc(props.post.src)
            props.playAudio()
          }
        }}/>
    </div>
  )
}

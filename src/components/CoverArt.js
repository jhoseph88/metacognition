import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../App.css'

export default class CoverArt extends Component {

  audioPlaying = () => {
    if (this.props.audioPlaying &&
        this.props.playingSrc === this.props.post.src) {
      return "pause-circle"
    } else {
      return "play-circle"
    }
  }

  handleClick = () => {
    if (this.props.audioPlaying) {
      if (this.props.playingSrc === this.props.post.src) {
        this.props.pauseAudio()
      } else {
        this.props.setSrc(this.props.post.src)
      }
    } else {
      this.props.setSrc(this.props.post.src)
      this.props.playAudio()
    }
  }

  render() {
    return (
      <div className="clickable-img">
        <img src={this.props.post.img} alt="latest podcast" width="100%"/>
        <FontAwesomeIcon icon={this.audioPlaying()} className="play-button"
          onClick={this.handleClick}/>
      </div>
    )
  }
}

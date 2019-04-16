import React from 'react'
import { Link } from '@reach/router'

import CoverArt from './CoverArt.js'
import Loader from '../components/Loader.js'
import '../App.css'

export default function Post(props) {
  return props.archive.length > 0 ? (
    <div className="content">
      <Link to="/archive">{'<'} Back</Link>
      <br/>
      <h3>{props.archive[props.postId].title}</h3>
      <p>{props.archive[props.postId].description}</p>
      <CoverArt post={props.archive[props.postId]}
        audioPlaying={props.audioPlaying}
        playAudio={props.playAudio}
        pauseAudio={props.pauseAudio}
        playingSrc={props.playingSrc}
        setSrc={props.setSrc} />
    </div>
  ) : <Loader/>
}

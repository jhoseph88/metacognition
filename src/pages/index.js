import React from 'react'

import Card from '../components/Card'
import Loader from '../components/Loader.js'

export default function Home(props) {
  return props.archive.length > 0 ? (
    <div>
      <h1 style={{ marginLeft: '25px' }}>Latest episodes:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card post={props.archive[0]}
          playAudio={props.playAudio}
          pauseAudio={props.pauseAudio}
          audioPlaying={props.audioPlaying}
          setSrc={props.setSrc}
          playingSrc={props.playingSrc}/>
        <Card post={props.archive[1]}
          playAudio={props.playAudio}
          pauseAudio={props.pauseAudio}
          audioPlaying={props.audioPlaying}
          setSrc={props.setSrc}
          playingSrc={props.playingSrc}/>
      </div>
    </div>
  ) : <Loader/>
}

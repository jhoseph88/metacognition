import React from 'react'

import Card from '../components/Card'
import Loader from '../components/Loader.js'

export default function Home(props) {
  return props.archive.length > 0 ? (
    <div>
      <h1 style={{ marginLeft: '25px' }}>Latest episodes:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card post={props.archive[0]}
          postId={0}
          playAudio={props.playAudio}
          pauseAudio={props.pauseAudio}
          audioPlaying={props.audioPlaying}
          setSrc={props.setSrc}
          playingSrc={props.playingSrc}
          attribution={props.archive[0]["attribution"]}/>
        <Card post={props.archive[1]}
          postId={1}
          playAudio={props.playAudio}
          pauseAudio={props.pauseAudio}
          audioPlaying={props.audioPlaying}
          setSrc={props.setSrc}
          playingSrc={props.playingSrc}
          attribution={props.archive[1]["attribution"]}/>
        <Card post={props.archive[2]}
          postId={2}
          playAudio={props.playAudio}
          pauseAudio={props.pauseAudio}
          audioPlaying={props.audioPlaying}
          setSrc={props.setSrc}
          playingSrc={props.playingSrc}
          attribution={props.archive[2]["attribution"]}/>
      </div>
    </div>
  ) : <Loader/>
}

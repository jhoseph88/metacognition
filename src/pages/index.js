import React from 'react'

import CardList from '../components/CardList.js'
import Loader from '../components/Loader.js'

export default function Home(props) {
  return props.archive.length > 0 ? (
    <div>
      <h1 style={{ marginLeft: '25px' }}>Latest episodes:</h1>
      <CardList
        archive={props.archive}
        audioPlaying={props.audioPlaying}
        playAudio={props.playAudio}
        pauseAudio={props.pauseAudio}
        setSrc={props.setSrc}
        playingSrc={props.playingSrc}/>
    </div>
  ) : <Loader/>
}

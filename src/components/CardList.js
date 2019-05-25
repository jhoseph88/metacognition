import React from 'react'

import Card from '../components/Card'
import { ATTRIBUTION_KEY, NUM_RECENTS } from '../Constants'

export default function CardList(props) {
  const cards = props.archive.slice(0, NUM_RECENTS).map((item, index) =>
    <Card post={props.archive[index]}
      postId={index}
      playAudio={props.playAudio}
      pauseAudio={props.pauseAudio}
      audioPlaying={props.audioPlaying}
      setSrc={props.setSrc}
      playingSrc={props.playingSrc}
      attribution={props.archive[index][ATTRIBUTION_KEY]}/>)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cards}
    </div>
  )
}

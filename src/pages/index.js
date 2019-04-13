import React from 'react'

import Card from '../components/Card'
import Loader from '../components/Loader.js'

export default class Home extends React.Component {
  render() {
    return this.props.archive.length > 0 ? (
      <div>
        <h1 style={{ marginLeft: '25px' }}>Latest episodes:</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card post={this.props.archive[0]}
            playAudio={this.props.playAudio}
            pauseAudio={this.props.pauseAudio}
            audioPlaying={this.props.audioPlaying}/>
          <Card post={this.props.archive[1]}
            playAudio={this.props.playAudio}
            pauseAudio={this.props.pauseAudio}
            audioPlaying={this.props.audioPlaying}/>
        </div>
      </div>
    ) : <Loader/>
  }
}

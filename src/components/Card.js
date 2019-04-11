import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../App.css'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { audioToggle: false }
  }

  render() {
    return (
      <div className="card">
        <div className="title-top">
          <h3 className="card-title">{this.props.post.title}</h3>
        </div>
        <div className="clickable-img">
          <img src={this.props.post.img} alt="latest podcast" width="100%"/>
          <FontAwesomeIcon icon={this.state.audioToggle ? "pause-circle" : "play-circle"}
            className="play-button"
            onClick={() => {this.setState({audioToggle: !this.state.audioToggle})}}/>
        </div>
        <div className="title-bottom">
          <p className="card-body">
            {this.props.post.description.substring(0, 250) + '...'}
          </p>
        </div>
      </div>
    )
  }
}

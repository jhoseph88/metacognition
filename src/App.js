import React, { Component } from 'react'
import { Link, Router } from '@reach/router'

// Font Awesome dependencies
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/index.js'
import About from './pages/about.js'
import Archive from './pages/archive.js'
import Support from './pages/support.js'

import Post from './components/Post.js'

import './App.css'
import { ARCHIVE_URL, ITUNES, RSS, RSS_ICON, SPOTIFY } from './Constants'

// badges
import { ReactComponent as SpotifyBadge } from './assets/spotify-podcast-badge-wht-blk-165x40.svg'
import { ReactComponent as AppleBadge } from './assets/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { archive: [], width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    // add Font Awesome icons to library
    library.add(faPlayCircle)
    library.add(faPauseCircle)
  }

  async componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    const archive = await (await fetch(ARCHIVE_URL)).json()
    this.setState({ archive: archive })
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {

    return (
      <div>
        <nav>
          <div className="logo-home">
            <Link to="/">
              <img src={require("./assets/logo_trans.png")} alt="logo" height="100" width="100"/>
            </Link>
          </div>
          <div className="page-links">
            <Link to="/about">About</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/support">Support</Link>
          </div>
        </nav>
        <Router>
          <Home path="/" archive={this.state.archive}/>
          <About path="/about"/>
          <Archive path="/archive" archive={this.state.archive}/>
          <Post path='/archive/:postId' archive={this.state.archive}/>
          <Support path='/support'/>
        </Router>
        <div className="footer">
          <p className="copyright">© Metacognition Podcast</p>
          <div className="footer-links">
            <a href={ITUNES} className="footer-link"><AppleBadge/></a>
            <a href={SPOTIFY} className="footer-link"><SpotifyBadge/></a>
            <a href={RSS} className="footer-link">
              <img src={RSS_ICON} width="55px" alt="RSS feed"/>
            </a>
          </div>
        </div>
        <audio className="sticky-player"
          style={{ position: 'fixed', bottom: '0', width: this.state.width }}
          src="http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a"
          controls/>
      </div>
    )
  }
}

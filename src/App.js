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
import { ARCHIVE_URL, ITUNES, RSS, RSS_ICON, SPOTIFY, GOOGLE_PLAY, STITCHER } from './Constants'

// badges
import {
  ReactComponent as SpotifyBadge
} from './assets/spotify-podcast-badge-wht-blk-165x40.svg'
import {
  ReactComponent as AppleBadge
} from './assets/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { archive: [], width: 0, height: 0, stickyPlaying: false }
    this.stickyPlayer = {}
    // add Font Awesome icons to library
    library.add(faPlayCircle)
    library.add(faPauseCircle)
  }

  async componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    const archive = await (await fetch(ARCHIVE_URL)).json()
    this.setState({ archive: archive, src: archive[0].src })
    this.stickyPlayer = document.getElementById("sticky-player")
    this.stickyPlayer.oncanplay = this.stickyPlayer.play
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  play = async () => {
    await this.stickyPlayer.play()
    this.setState({ stickyPlaying: true })
  }

  pause = async () => {
    await this.stickyPlayer.pause()
    this.setState({ stickyPlaying: false })
  }

  suspend = async () => {
    await this.play()
  }

  setSrc = (url) => {
    this.stickyPlayer.setAttribute('src', url)
  }

  render() {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
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
        <Router className="router">
          <Home path="/"
            archive={this.state.archive}
            playAudio={this.play}
            pauseAudio={this.pause}
            audioPlaying={this.state.stickyPlaying}
            setSrc={this.setSrc}
            playingSrc={this.stickyPlayer.src}/>
          <About path="/about"/>
          <Archive path="/archive" archive={this.state.archive}/>
          <Post path='/archive/:postId'
            archive={this.state.archive}
            playAudio={this.play}
            pauseAudio={this.pause}
            audioPlaying={this.state.stickyPlaying}
            setSrc={this.setSrc}
            playingSrc={this.stickyPlayer.src}/>
          <Support path='/support'/>
        </Router>
        <div className="footer">
          <p className="copyright">© Metacognition Podcast</p>
          <div className="footer-links">
            <a href={ITUNES} className="footer-link"><AppleBadge/></a>
            <a href={SPOTIFY} className="footer-link"><SpotifyBadge/></a>
            <a href={GOOGLE_PLAY} className="footer-link" rel='nofollow'><img width='125px' alt='Listen on Google Play Music' src='https://play.google.com/intl/en_us/badges-music/images/badges/en_badge_web_music.png'/></a>
            <a href={STITCHER} className="footer-link"><img width='125px' src="https://secureimg.stitcher.com/promo.assets/badges/Stitcher_Listen_Badge_Color_Light_BG.png" alt="Listen to Stitcher"/></a>
            <a href={RSS} className="footer-link">
              <img src={RSS_ICON} width="55px" height="55px" alt="RSS feed"/>
            </a>
          </div>
        </div>
        <audio id="sticky-player"
          style={{ position: 'fixed', bottom: '0', width: this.state.width }}
          onPlay={this.play}
          onPause={this.pause}
          onSuspend={this.suspend}
          controls/>
      </div>
    )
  }
}

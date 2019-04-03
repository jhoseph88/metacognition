import React, { Component } from 'react'
import { Link, Router } from '@reach/router'

import Home from './pages/index.js'
import About from './pages/about.js'
import Archive from './pages/archive.js'
import Support from './pages/support.js'

import Post from './components/Post.js'
import AudioPlayer from './components/AudioPlayer.js'

import './App.css'
import { ARCHIVE_URL, ITUNES, RSS, RSS_ICON, SPOTIFY } from './Constants'

// badges
import { ReactComponent as SpotifyBadge } from './assets/spotify-podcast-badge-wht-blk-165x40.svg'
import { ReactComponent as AppleBadge } from './assets/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { archive: [] }
  }

  async componentDidMount() {
    const archive = await (await fetch(ARCHIVE_URL)).json()
    this.setState({ archive: archive })
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
        <div style={{ position: 'fixed', bottom: '0' }}>
          <AudioPlayer src='http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a' title='ok'/>
        </div>
      </div>
    )
  }
}

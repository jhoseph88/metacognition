import React, { Component } from 'react'
import { Link, Router } from '@reach/router'

import Home from './pages/index.js'
import About from './pages/about.js'
import Archive from './pages/archive.js'
import Support from './pages/support.js'

import Post from './components/Post.js'

import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { archive: [], latest: {} }
  }

  async componentDidMount() {
    const archive = await (await fetch('https://s3.amazonaws.com/metacognition/archive.json')).json()
    this.setState({ archive: archive, latest: archive[0] })
  }

  render() {

    return (
      <div className="root">
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
          <Home path="/" latest={this.state.latest}/>
          <About path="/about"/>
          <Archive path="/archive" archive={this.state.archive}/>
          <Post path='/archive/:postId' archive={this.state.archive}/>
          <Support path='/support'/>
        </Router>
        <div className="footer">
          <p className="copyright">© Metacognition Podcast</p>
          <a href="https://pcr.apple.com/id1450133749" className="footer-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Rss-feed.svg/600px-Rss-feed.svg.png"
              width="100%"
              alt="rss feed link"/>
          </a>
        </div>
      </div>
    )
  }
}

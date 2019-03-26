import React from 'react'
import { Link } from '@reach/router'

import Card from '../components/Card'
import '../App.css'

export default function Home(props) {
  return (
    <div className="intro">

      <div className="card">
        <div className="title-top">
          <h3 className="card-title">{props.latest.title}</h3>
        </div>
        <div className="card-links">
          <p>placeholder-put apple podcast and spotify links here</p>
          <a href="https://itunes.apple.com/us/podcast/metacognition/id1450133749?mt=2">
            <img src=""
              width="10%"
              alt="apple podcast link"/>
          </a>
        </div>
        <img src={props.latest.img} alt="latest podcast" width="100%"/>
        <div className="title-bottom">
          <p className="card-body">bullshit</p>
        </div>
      </div>
    </div>
  )
}

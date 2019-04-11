import React from 'react'
import { Link } from '@reach/router'

import '../App.css'

export default function Post(props) {

  return (
    <div className="content">
      <Link to="/archive">{'<'} Back</Link>
      <br/>
      <h3>{props.archive[props.postId].title}</h3>
      <p>{props.archive[props.postId].description}</p>
      <img src={props.archive[props.postId].img}
        width="50%"
        alt={props.archive[props.postId].title}/>
      <audio src={props.archive[props.postId].src} controls/>
    </div>
  )
}

import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <div className="title-top">
        <h3 className="card-title">{props.post.title}</h3>
      </div>
      <img src={props.post.img} alt="latest podcast" width="100%"/>
      <div className="title-bottom">
        <p className="card-body">{props.post.description.substring(0, 250) + '...'}</p>
      </div>
    </div>
  )
}

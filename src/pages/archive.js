import React from 'react'
import { Link } from '@reach/router'

import '../App.css'

export default function Archive(props) {
  return (
    <div className="content">
      <h1>Podcast Archive</h1>
      <br />
      All Podcasts:
      <ul>
        {props.archive.map((post, idx) => (
          <li key={post.id}>
            <Link to={`/archive/${idx}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

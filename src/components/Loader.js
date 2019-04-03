import React from 'react'
import { RingLoader } from 'react-spinners'

export default function Loader(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '100px' }}>
      <RingLoader sizeUnit={"px"} size={150}/>
    </div>
  )
}

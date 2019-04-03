import React from 'react'
import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer'

export default function AudioPlayer(props) {
  const defaultOptions = {
    id: 'AudioPlayer',
    keyEnabled: true,
    verticalVolume: true,
    media: {
      title: props.title,
      sources: { m4a: props.src },
      free: true,
    },
  }
  initializeOptions(defaultOptions)

  return (
    <JPlayer id={defaultOptions.id} className="jp-sleek">
      <Audio/>
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Play><i className="fa">{/* Icon set in css */}</i></Play>
          <Repeat><i className="fa fa-repeat" /></Repeat>
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
          <FullScreen><i className="fa fa-expand" /></FullScreen>
          <Download><i className="fa fa-download" /></Download>
          <div className="jp-title-container">
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported/>
      </Gui>
    </JPlayer>
  )
}

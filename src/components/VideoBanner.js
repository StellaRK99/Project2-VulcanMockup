import React from 'react'
import ReactPlayer from 'react-player/vimeo'

function VideoBanner() {
  return (
    <div className="videoBanner">
      <ReactPlayer className="promo-video" url='https://vimeo.com/183929811' controls={true}/>
     </div>

  )
}

export default VideoBanner
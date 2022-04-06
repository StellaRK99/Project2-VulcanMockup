import React from 'react'
import ReactPlayer from 'react-player/vimeo'

function VideoBanner() {
  return (
    <section className="videoBanner">
      <ReactPlayer className="promo-video" 
      url='https://vimeo.com/183929811' 
      controls={true}
      width={900}
      />
     </section>

  )
}

export default VideoBanner
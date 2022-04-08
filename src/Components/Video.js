import React from "react"

function Video() {
  return (
    <div className="vid">
      <div className="container">
        <iframe
          src="https://www.youtube.com/embed/HbO1qcqvh04"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Video

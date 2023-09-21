import React from 'react'

function Imageresto({images}) {
  return (
    <div className="flex flex-wrap">
    <img
      className="w-56 h-44 mr-1 mb-1"
      src={images[0]}
      alt=""
    />
    <img
      className="w-56 h-44 mr-1 mb-1"
      src={images[1]}
      alt=""
    />
    <img
      className="w-56 h-44 mr-1 mb-1"
      src={images[2]}
      alt=""
    />
    <img
      className="w-56 h-44 mr-1 mb-1"
      src={images[3]}
      alt=""
    />
    <img
      className="w-56 h-44 mr-1 mb-1"
      src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
      alt=""
    />
  </div>
  )
}

export default Imageresto
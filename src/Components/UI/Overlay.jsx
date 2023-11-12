import React from "react"

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 right-0 z-40 w-full h-full bg-black/75">
      {children}
    </div>
  )
}

export default Overlay

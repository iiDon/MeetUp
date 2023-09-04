import React from 'react'

function Spinner() {
  return (
    <div className="flex  min-h-spinner-container items-center justify-center">
    {" "}
    <div className="relative">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  )
}

export default Spinner
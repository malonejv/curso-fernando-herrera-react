import React from 'react'
import './Loading.css'

export const Loading = ({ isLoading, loadingMessage }) => {
  return (
    <>
      {isLoading && <div className="loading">{loadingMessage || "Loading..."}</div>}
    </>
  )
}

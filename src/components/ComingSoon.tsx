import React from 'react'

export default function ComingSoon () {
  return (
    <>
    <>
      <div style={comingSoonDiv}>
        <h1 className="text uppercase text-3xl sm:3xl md:5xl lg:7xl tracking-wider font-bold">Coming Soon</h1>
      </div>
    </>
    </>
  )
}

const comingSoonDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#282c34",
  };

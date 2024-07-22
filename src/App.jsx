import React from "react"

function App() {
  return (
      <CardComponent innerComponent={<TextComponent />}/>
  )
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardComponent({innerComponent}) {
  return <div style={{border: "5px solid black", textAlign: "center", padding: "200px", margin: "100px"}}>
    {innerComponent}
  </div>
}

export default App;
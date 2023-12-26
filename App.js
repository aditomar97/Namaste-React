import React from 'react'
import ReactDOM from 'react-dom/client'

const parent= React.createElement("div",{},
[React.createElement("div",{},React.createElement("h1",{},"I am a h1 tag")),
React.createElement("div",{},React.createElement("h1",{},"Hello am a h2 tag"))

]

)

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
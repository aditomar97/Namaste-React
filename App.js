import React from 'react'
import ReactDOM from 'react-dom/client'

const Tilte=()=><h1>This is Namaste React</h1>
const HeadingComponent=()=>{
    return(
        <div>
            <Tilte/>
            <h1>Welcome Again</h1>
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
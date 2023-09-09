import { useState } from "react"


export default function UseState() {
  
    const [usestate,setState] = useState(0)

const handlePlas = () => {
const newState = usestate + 1
setState(newState)
}

const handleMainas= () =>{
const newState = usestate - 1
setState(newState)
}


  return (
    <div>
        <h3>nam:{usestate}</h3>
        <button onClick={handlePlas}>plas</button>
        <button onClick={handleMainas}>mainas</button>
    </div>
  )  



}
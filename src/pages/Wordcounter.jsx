import {useState} from "react"
import {wordCounter} from "../tools/wordCounter"

function WordCounter(){

const [text,setText] = useState("")

const result = wordCounter(text)

return(

<div style={{marginTop:"40px"}}>

<h2>Word Counter Tool</h2>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<p>Words: {result.words}</p>

<p>Characters: {result.characters}</p>

</div>

)

}

export default WordCounter
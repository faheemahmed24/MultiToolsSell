import ToolCard from "../components/ToolCard"
import WordCounter from "./WordCounter"

function Home(){

return(

<div className="container">

<h2>Popular Tools</h2>

<div className="tools">

<ToolCard
title="Word Counter"
description="Count words and characters"
/>

<ToolCard
title="QR Generator"
description="Generate QR Codes"
/>

<ToolCard
title="Image Compressor"
description="Compress images"
/>

</div>

<WordCounter/>

</div>

)

}

export default Home
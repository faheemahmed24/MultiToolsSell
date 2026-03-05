function ToolCard({title,description}){

return(

<div className="card">

<h3>{title}</h3>

<p>{description}</p>

<button>Open Tool</button>

</div>

)

}

export default ToolCard
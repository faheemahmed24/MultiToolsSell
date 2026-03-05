export function wordCounter(text){

if(!text){

return{
words:0,
characters:0
}

}

let words = text.trim().split(/\s+/)

return{

words:words.length,
characters:text.length

}

}
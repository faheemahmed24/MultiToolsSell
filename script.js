
function wordCounter(){
let t=document.getElementById("wc").value.trim()
let words=t? t.split(/\s+/).length:0
let chars=t.length
document.getElementById("wc_result").innerText="Words: "+words+" | Characters: "+chars
}

function reverseText(){
let t=document.getElementById("rev").value
document.getElementById("rev_result").innerText=t.split("").reverse().join("")
}

function upperText(){
let t=document.getElementById("up").value
document.getElementById("up_result").innerText=t.toUpperCase()
}

function lowerText(){
let t=document.getElementById("low").value
document.getElementById("low_result").innerText=t.toLowerCase()
}

function b64encode(){
let t=document.getElementById("b64e").value
document.getElementById("b64e_result").innerText=btoa(t)
}

function b64decode(){
let t=document.getElementById("b64d").value
try{
document.getElementById("b64d_result").innerText=atob(t)
}catch{
document.getElementById("b64d_result").innerText="Invalid Base64"
}
}

function urlencode(){
let t=document.getElementById("urlenc").value
document.getElementById("urlenc_result").innerText=encodeURIComponent(t)
}

function urldecode(){
let t=document.getElementById("urldec").value
document.getElementById("urldec_result").innerText=decodeURIComponent(t)
}

function jsonFormat(){
let t=document.getElementById("json").value
try{
let obj=JSON.parse(t)
document.getElementById("json_result").innerText=JSON.stringify(obj,null,2)
}catch{
document.getElementById("json_result").innerText="Invalid JSON"
}
}

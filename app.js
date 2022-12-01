const td = document.querySelectorAll("td"),
h3 = document.querySelector("h3"),
winner=document.querySelector(".pop-container span")
const popup=document.querySelector(".popup")
const about=document.querySelector("i.fa-question")
const back=document.querySelector("i.fa-chevron-left")
const total=document.querySelector("#total")
const p2=document.querySelector("#p2")

let nTotal=0
let pTwo=0

nTotal=localStorage.getItem("nTotal")
pTwo=localStorage.getItem("player2")
if(nTotal){
total.innerText=nTotal
}
if(pTwo){
p2.innerText=pTwo
}
about.addEventListener("click", function(){
document.querySelector(".game-page").style.display="none"
document.querySelector(".settings").style.display="block"
back.style.display="block"
})

back.addEventListener("click", function(){
document.querySelector(".game-page").style.display="block"
document.querySelector(".settings").style.display="none"
back.style.display="none"
})
for(let i = 0; i < td.length; i++){
td[i].addEventListener("click", function(){
if(td[i].innerText == "O" || td[i].innerText == "X" ){
    
}else{
    td[i].innerText =  "X"
    td[i].style.color ="blue"
    h3.innerText = "Computer's Turn,Thinking..."
    check_X()
    
}
;
})
}
function c_plays(){
let goIndex = Math.floor(Math.random() * 9)
if(td[goIndex].innerText == "X" ||td[goIndex].innerText == "O"){
c_plays()
}else{
let x = setInterval(() => {
    td[goIndex].innerText = "O"
    td[goIndex].style.color ="red"
    
    check_O()
}, 500);
}
;
}
function game(){
play_first = Math.floor(Math.random() * 2)
if (play_first == 0){
h3.innerText = "Your Turn"
}else{
c_plays()
h3.innerText = "Computer's Turn,Thinking..."
}
}
game()
function check_O(){
if((td[0].innerText==="O"&&td[1].innerText==="O"&&td[2].innerText==="O") ||
(td[3].innerText==="O"&&td[4].innerText==="O"&&td[5].innerText==="O") ||
(td[6].innerText==="O"&&td[7].innerText==="O"&&td[8].innerText==="O") ||
(td[0].innerText==="O"&&td[3].innerText==="O"&&td[6].innerText==="O")||
(td[1].innerText==="O"&&td[4].innerText==="O"&&td[7].innerText==="O")||
(td[2].innerText==="O"&&td[5].innerText==="O"&&td[8].innerText==="O")||
(td[0].innerText==="O"&&td[4].innerText==="O"&&td[8].innerText==="O")||
(td[2].innerText==="O"&&td[4].innerText==="O"&&td[6].innerText==="O")

){
h3.style.visibility="hidden"
winner.innerText="O"
popup.style.display = "flex"
}
else{

h3.style.color="red"
h3.innerText = "Your Turn"
}
}

function check_X(){
if((td[0].innerText==="X"&&td[1].innerText==="X"&&td[2].innerText==="X") ||
(td[3].innerText==="X"&&td[4].innerText==="X"&&td[5].innerText==="X") ||
(td[6].innerText==="X"&&td[7].innerText==="X"&&td[8].innerText==="X") ||
(td[0].innerText==="X"&&td[3].innerText==="X"&&td[6].innerText==="X")||
(td[1].innerText==="X"&&td[4].innerText==="X"&&td[7].innerText==="X")||
(td[2].innerText==="X"&&td[5].innerText==="X"&&td[8].innerText==="X")||
(td[0].innerText==="X"&&td[4].innerText==="X"&&td[8].innerText==="X")||
(td[2].innerText==="X"&&td[4].innerText==="X"&&td[6].innerText==="X")

){
pTwo++
localStorage.setItem("player2",pTwo)
p2.innerText=pTwo
h3.style.visibility="hidden"
popup.style.display = "flex"

winner.innerText="X"
popup.style.display="flex"
}
else{
c_plays()
h3.style.color="blue"
}
}
function proceed(){
nTotal++
localStorage.setItem("nTotal",nTotal)
total.innerText=nTotal
location.reload()
}
function start(){

if (confirm("Are you sure you want to quit the game?")) {
            
localStorage.clear()
proceed()
} else {
    proceed()
}
}
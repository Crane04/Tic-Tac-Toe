const td = document.querySelectorAll("td"),
h3 = document.querySelector("h3"),
winner=document.querySelector(".pop-container span")
const popup=document.querySelector(".popup")
const about=document.querySelector("i.fa-question")
const back=document.querySelector("i.fa-chevron-left")
const total=document.querySelector("#total")
const p2=document.querySelector("#p2")


let nTotal=0
let playerScore=0

nTotal=localStorage.getItem("ticTotal")
playerScore=localStorage.getItem("playerInfo")
if(nTotal){
total.innerText=nTotal
}
if(playerScore){
p2.innerText=playerScore
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
    draw()
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
draw()
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
document.querySelectorAll(".pop-container p")[1].style.display="block"
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
playerScore++
localStorage.setItem("playerInfo",playerScore)
p2.innerText=playerScore
document.querySelectorAll(".pop-container p")[1].style.display="block"
h3.style.visibility="hidden"
popup.style.display = "flex"

winner.innerText="X"
}
else{
c_plays()
h3.style.color="blue"
}
}
function proceed(){
nTotal++
localStorage.setItem("ticTotal",nTotal)
total.innerText=nTotal
location.reload()
}
function start(){

if (confirm("Are you sure you want to restart the game?")) {
            
localStorage.clear()
localStorage.setItem("ticTotal",0)
location.reload()
} else {
    proceed()
}
}

function draw(){
    if(td[0].innerText!=""&&td[1].innerText!=""&&td[2].innerText!=""&&td[3].innerText!=""&&td[4].innerText!=""&&td[5].innerText!=""&&td[6].innerText!=""&&td[7].innerText!=""&&td[8].innerText!=""){
        h3.style.visibility="hidden"
        popup.style.display = "flex"
        document.querySelectorAll(".pop-container p")[0].style.display="block"
    }
}
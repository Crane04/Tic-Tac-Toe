const td=document.querySelectorAll("td")
const h3=document.querySelector("h3")
const p1=document.querySelector("#p1")
const p2=document.querySelector("#p2")
const winner=document.querySelector(".pop-container span")
const nobodyWon=document.querySelector(".pop-container p")
const popup=document.querySelector(".popup")
const about=document.querySelector("i.fa-question")
const back=document.querySelector("i.fa-chevron-left")

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
let pOne=0
let pTwo=0

pOne=localStorage.getItem("player1")
pTwo=localStorage.getItem("player2")
if(pOne){
    p1.innerText=pOne
}
if(pTwo){
    p2.innerText=pTwo
}
let turns=0
for(let i=0; i<td.length; i++){
    td[i]=false
    td[i].addEventListener("click", function(){
        if(td[i].innerText==="O"||td[i].innerText==="X"){
            h3.innerText="Hint: Choose another box!"
        }else{
            turns++
            if(turns===1||turns===3||turns===5||turns===7||turns===9){
            this.innerText="O"
            this.style.color="red"
            h3.innerText="Hint: X's turn"
            h3.style.color="blue"
        }else if(turns===0||turns===2||turns===4||turns===6||turns===8){
            this.innerText="X"
            h3.innerText="Hint: O's turn"
            h3.style.color="red"
            this.style.color="blue"
        }
        }

        //O wins
        if(turns===9){
            nobodyWon.innerText="Nobody Won, do you want to play again?"
            popup.style.display="flex"
     
        }
       else if(td[0].innerText==="O"&&td[1].innerText==="O"&&td[2].innerText==="O"){
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[0].classList.add("red-wins")
            td[1].classList.add("red-wins")
            td[2].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"
            
            winner.innerText="O"
            popup.style.display="flex"
        }else  if(td[3].innerText==="O"&&td[4].innerText==="O"&&td[5].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[3].classList.add("red-wins")
            td[4].classList.add("red-wins")
            td[5].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else  if(td[6].innerText==="O"&&td[7].innerText==="O"&&td[8].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[6].classList.add("red-wins")
            td[7].classList.add("red-wins")
            td[8].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else if(td[0].innerText==="O"&&td[3].innerText==="O"&&td[6].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[0].classList.add("red-wins")
            td[3].classList.add("red-wins")
            td[6].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else  if(td[1].innerText==="O"&&td[4].innerText==="O"&&td[7].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[1].classList.add("red-wins")
            td[4].classList.add("red-wins")
            td[7].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else  if(td[2].innerText==="O"&&td[5].innerText==="O"&&td[8].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[2].classList.add("red-wins")
            td[5].classList.add("red-wins")
            td[8].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else  if(td[0].innerText==="O"&&td[4].innerText==="O"&&td[8].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[0].classList.add("red-wins")
            td[4].classList.add("red-wins")
            td[8].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }else  if(td[2].innerText==="O"&&td[4].innerText==="O"&&td[6].innerText==="O"){
            winner.innerText="O wins"
            pOne++
            localStorage.setItem("player1",pOne)
            p1.innerText=pOne
            td[2].classList.add("red-wins")
            td[4].classList.add("red-wins")
            td[6].classList.add("red-wins")
            h3.innerText="Player O won!"
            h3.style.color="red"

                
            winner.innerText="O"
            popup.style.display="flex"
      
        }
        //X wins
        else if(td[0].innerText==="X"&&td[1].innerText==="X"&&td[2].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[0].classList.add("blue-wins")
            td[1].classList.add("blue-wins")
            td[2].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"      
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[3].innerText==="X"&&td[4].innerText==="X"&&td[5].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[3].classList.add("blue-wins")
            td[4].classList.add("blue-wins")
            td[5].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[6].innerText==="X"&&td[7].innerText==="X"&&td[8].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[6].classList.add("blue-wins")
            td[7].classList.add("blue-wins")
            td[8].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else if(td[0].innerText==="X"&&td[3].innerText==="X"&&td[6].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[0].classList.add("blue-wins")
            td[3].classList.add("blue-wins")
            td[6].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[1].innerText==="X"&&td[4].innerText==="X"&&td[7].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[1].classList.add("blue-wins")
            td[4].classList.add("blue-wins")
            td[7].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[2].innerText==="X"&&td[5].innerText==="X"&&td[8].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[2].classList.add("blue-wins")
            td[5].classList.add("blue-wins")
            td[8].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[0].innerText==="X"&&td[4].innerText==="X"&&td[8].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[0].classList.add("blue-wins")
            td[4].classList.add("blue-wins")
            td[8].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }else  if(td[2].innerText==="X"&&td[4].innerText==="X"&&td[6].innerText==="X"){
            winner.innerText="X wins"
            pTwo++
            localStorage.setItem("player2",pTwo)
            p2.innerText=pTwo
            td[2].classList.add("blue-wins")
            td[4].classList.add("blue-wins")
            td[6].classList.add("blue-wins")
            h3.innerText="Player X won!"
            h3.style.color="blue"
            winner.innerText="X"
            popup.style.display="flex"
        }
    })
}

function proceed(){
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

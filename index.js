// document.getElementById("count-el").innerText = 5

// function increment() {
//     console.log("The button wascliked")
// }

let countEl = document.getElementById("count-el")
let count = 0

function increment (){
    count = count + 1
    countEl.innerText = count
}
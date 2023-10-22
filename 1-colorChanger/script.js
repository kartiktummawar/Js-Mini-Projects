const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

console.log(button);

button.forEach((button) => {
    button.addEventListener('click', (e) => {

        if(e.target.id == "grey" || e.target.id == "white" || e.target.id == "blue" || e.target.id == "yellow" ){
            body.style.backgroundColor = e.target.id
        }
    })

})
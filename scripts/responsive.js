let container = document.getElementById("container-responsive");

let button = document.getElementById("hamburger")

if(button){

button.addEventListener("click", function(){
    container.classList.toggle("esconder")
})

}

const panel = document.querySelectorAll(".panel");

panel.forEach((panel) =>{
    panel.addEventListener("click" , ()=>{
        remove();
        panel.classList.add("active")
    })

})

function remove(){

    panel.forEach(panel =>{

        panel.classList.remove('active')
    })
}
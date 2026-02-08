let smallCup = document.querySelectorAll(".cup-small");
let listers = document.getElementById("litters");
let percentage = document.getElementById("percentage");
let remained = document.getElementById("remained");

smallCup.forEach((cup,idx)=>{
console.log(idx)

    cup.addEventListener("click" , ()=> highlightcup(idx))
})


function highlightcup(idx){
   if(smallCup[idx].classList.contains('full') && !smallCup[idx].nextElementSibling.classList
.contains('full')){
    idx--
}
    console.log(idx)

    smallCup.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add("full")
        }else{
            cup.classList.remove('full')
        }
    })

    udatecup()
}


function udatecup(){
    let fullcups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCup.length;

    if(fullcups === 0){
        percentage.style.visibility= 'hidden';
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullcups/totalCups*330}px`
        percentage.textContent = `${fullcups/ totalCups *100}%`
    }
//     if(fullcups === totalCups){
//         remained.style.visibility = 'hidden';
//         remained.style.height= 0
//     }else{   
//         remained.style.visibility = 'visible';
//         listers.textContent = `${250 * fullcups /1000}L`
//     }
 }
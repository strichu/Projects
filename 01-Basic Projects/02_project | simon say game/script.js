let gameseq = [];
let userseq = [];

let strated = false;

let btns = ['red', 'yellow' , 'green ' , 'purple'];

let level  = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress" , () =>{
    // console.log("game start")
    if(strated ==false){
        strated = true;
        console.log("game is strat")
        levelUp()
    }
})

function gameflash(btn){
    btn.classList.add("flash");

    setTimeout( function (){
        btn.classList.remove("flash");
    },250)
}


function userflash(btn){
    btn.classList.add("userflash");

    setTimeout( function (){
        btn.classList.remove("userflash");
    },250)
}



function levelUp(){
  userseq = [];
    level++;

    h2.textContent = `Level ${level}`

    let randidx = Math.floor(Math.random()*3);

    let randColor  = btns[randidx];

    let randbtn = document.querySelector(`.${randColor}`)
    gameseq.push(randColor)
    console.log(gameseq)
    gameflash(randbtn);

}

function checkans(idx){
    

    if(userseq[idx] === gameseq[idx]){
    if(userseq.length== gameseq.length){
      setTimeout(levelUp , 2000)
   
    }

    
    }else{
        h2.innerHTML  = `game over ! your score is <b>${level} </b> <br> your heighet score is ${level} `
        reset();

    }

}

function keypress(){
    console.log(this)
    let btn = this;

    // console.log("key was pressed");
    userflash(btn)

    userColor  = btn.getAttribute("id");
    userseq.push(userColor)

    checkans(userseq.length-1)
    
}

let allbtns = document.querySelectorAll(".btn");

for(let btn of allbtns){

    btn.addEventListener("click" , keypress);

}


function reset(){
    gameseq = [];
    userseq = [];
    strated = false;
    level = 0
}




















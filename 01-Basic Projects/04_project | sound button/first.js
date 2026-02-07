let sounds = ['diff' , 'apna'];

sounds.forEach(sound =>{

    let btn = document.createElement("button");

    btn.classList.add("btn");

    btn.innerText = sound;


    document.getElementById("buttons").appendChild( btn);

    btn.addEventListener("click" , () =>{


    stopsong()


        document.getElementById(sound).play()
    })

})


function stopsong(){

    sounds.forEach(sound =>{

        let song = document.getElementById(sound);

        song.pause()
        song.currentTime  = 0
        
    })
}

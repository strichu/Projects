
const p = document.querySelector("p");

const btn = document.querySelector("button");
btn.addEventListener("click" , generate)
p.innerText = "i am strichu Coder "


generate();

 async function generate(){
    const config  = {
        headers: {
            Accept: 'application/json'
        }
    }

    // api call<M>

 const res = await fetch('https://icanhazdadjoke.com',config)

 const data = await res.json()

 p.innerHTML  = data.joke


 
}



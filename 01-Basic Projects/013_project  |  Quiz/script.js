const form = document.querySelector("form");
const btn = document.querySelector("button");
 const out =  document.querySelector("#out")

out.innerText = ""
    const answer = {
        q1:"hazrat muhammad(saw)",
        q2: "313",
        q3: "all of them",
        q4: "571 A.d",
        q5: "five"
    }

form.addEventListener("submit"  , (e)=>{
    e.preventDefault();



    const child = new FormData(form)
let score = 0;
    for(let [name,value] of child.entries()){
        console.log(name,value)
        if(answer[name]==value){
        score++;
        }
     
       
        
    }

 out.textContent = `your score  out of 5 / correct ${score}`;

form.reset()
 
})

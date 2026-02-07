const codefile= [
    {
        question:'what are language is excute on web browser',
        a:'c++',
        b: 'java',
        c: 'javascript',
        d:'C',
        correct:'c'
    },
       {
        question:'css stand for',
        a:'cascading style sheet',
        b: 'style sheet',
        c: 'cascading sheet style',
        d:'cascading',
        correct:'a'
    },
       {
        question:'what is chrome engine',
        a:'v8',
        b: 'spidermonkey',
        c: 'edge',
        d:'sparka',
        correct:'a'
    }
]


const quiz = document.querySelector(".quiz-header");
const annserEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectdata()
    const currentquizdata = codefile[currentquiz];
    questionEl.innerText = currentquizdata.question;

    a_text.innerText = currentquizdata.a
    b_text.innerText = currentquizdata.b
    c_text.innerText = currentquizdata.c
    d_text.innerText = currentquizdata.d

    
}


function deselectdata(){

    annserEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;

    annserEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })  

    return answer
}


submitBtn.addEventListener("click" , ()=>{
    let answer =  getSelected()
    console.log(answer)

    if(answer){
        if(answer === codefile[currentquiz].correct){
            score++
           
        }
        currentquiz++;

        if(currentquiz !== codefile.length){
            loadQuiz()
           
        }else if(score === codefile.length){
              quiz.innerHTML = `
            <h2>you correctly answered ${score} /
            ${codefile.length}
        
            </h2>
            <h3 style="display:flex;justify-content:center;">congrulation ✅ ✅ ✅ </h3>
            <button  onclick = "location.reload()">
            Reload</button>
            `
        }
        else{
            quiz.innerHTML = `
            <h2>you correctly answered ${score} /
            ${codefile.length}
            </h2>
            <h3 style="display:flex;justify-content:center;">you more efford 🎯🎯</h3>
           
            <button  onclick = "location.reload()">
            Reload</button>
            `
           
        }
    }
})
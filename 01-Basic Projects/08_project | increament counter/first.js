// let counter = document.querySelectorAll('.counter');

// counter.forEach(counter =>{

//     counter.textContent = '0';

//     const updateCounter = ()=>{

//         const target = +counter.getAttribute('data-target')
//         console.log(target)
//         let c = +counter.textContent;

//         const increament = target/200;
//         if(c< target){
//             counter.textContent =   `${Math.ceil(c+increament)}`
//             setTimeout(updateCounter,1)
//         }else{
//             counter.innerText = target
//         }
//     }

//     updateCounter()
// })



let counter = document.querySelectorAll(".counter");

counter.forEach(counter =>{

    counter.textContent = '0'

    let value = ()=>{

        let target = +counter.getAttribute("data-target");

        let c = +counter.textContent;

        let increament = target / 200;


        if(c<target){
            counter.textContent = `${Math.ceil(c+increament)}`;
            setTimeout(value,1)
        }else{
            counter.textContent = target;
        }
    }
    value()
})
const bg = document.querySelector(".bg");
const loading =  document.querySelector(".loading");


let load = 0;


const int = setInterval(bluring,30);



function bluring(){
    load++;


if(load>99){
    clearInterval(int)
}

    loading.innerText = `${load}%`;

    loading.style.opacity = scale(load,0, 100, 1 , 0);
    bg.style.filter =  `blur(${scale(load,0 , 100 , 30, 0)}px)`


}



    const scale = (num, min ,max,outmin , outmax) =>{
        return (num-min) * (outmax-outmin)/ (max-min) +outmin
    } 
const labels = document.querySelectorAll(".form-control label");


labels.forEach(labels =>{

    labels.innerHTML = labels.innerText
    
    .split('')
    .map((latter,idx) => `<span style= " transition-delay:${idx*30}ms">${latter}</span>` )
    .join('')
})
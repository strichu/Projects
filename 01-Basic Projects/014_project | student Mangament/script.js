let inputs = document.querySelectorAll("input")
let addButton = document.querySelector("#add-record");
let deleteButton = document.querySelector("#delete-btn")
let lower = document.querySelector("#down");
let form = document.querySelector("form")
let updateRecord = document.querySelector("#update-record")
let roll = document.querySelector("#roll");
let cls = document.querySelector("#class")
let totalMark = document.querySelector("#total-mark");
let obtained = document.querySelector("#obtained")
let low = document.querySelector("#low")

let rollno = document.querySelector("#rollno");
let classes = document.querySelector("#classes")
let name = document.querySelector("#name")
let totals =document.querySelector("#totals")
let obtaine = document.querySelector("#obtaine")
let heading =document.querySelector("#head")

let search = document.querySelector("#search-btn")
let displayAll =document.querySelector("#display-all")
addButton.addEventListener("click" , ()=>{

    heading.style.display = "none"
    if(inputs[0].value === ""){
        alert("please enter details")
        return
    }
 
    let div = document.createElement("div");
    let percentage = inputs[4].value / inputs[3].value *100
    
    div.innerHTML = `
      <table  border="1px">
      
                    <tr >
                    
                        <td class="same">Roll No</td>
                        <td class="same">name</td>
                        <td class="same">Class</td>
                        <td class="same">Total Marks</td>
                        <td class="same">Obtained Marks</td>
                        <td class="same">percentage</td>
                        <td class="same">Action</td>
                        
                    </tr>

                    <tr>

                        <td id="rollno"  >${inputs[0].value}</td>
                        <td id="name">${inputs[1].value}</td>
                        <td id="classes">${inputs[2].value}</td>
                        <td  id="totals">${inputs[3].value}</td>
                        <td id="obtaine">${inputs[4].value}</td>
                        
                        <td id="percentage">${percentage.toFixed(1)}%</td>
                        <td>
                        <button class="btn" id="edit">edit</button>
                        <button class="btn" id="del">Delete</button>
                        </td>
                        
                        </tr>
                        
                        </table>
                        `

                        
                        

                        lower.appendChild(div)
                        
    form.reset()

    let edit = document.querySelector("#edit")
   
    edit.addEventListener("click" , ()=>{
     
        // name.innerText = inputs[1].value;
        // classes[2].value;
        // totals.innerText = inputs[2].value;
        // obtaine.innerText  = inputs[3].value
    })

    
    
    deleteButton.addEventListener("click" , ()=>{
        div.remove()
        heading.style.display = "flex"
        
    })

    let del = div.querySelector("#del");

    del.addEventListener("click" , ()=>{
            div.remove()
            confirm("are you want to deleted this record")
        
    })


    // search 
    
    search.addEventListener("click" , ()=>{
        addButton.style.display = "none";
        deleteButton.style.display = "none";
        
        let data = prompt("enter rollno id your search");

        let rollno = div.querySelector("#rollno").innerText;
        let name = div.querySelector("#name").innerText;
        let classes = div.querySelector("#classes").innerText;
        let totals = div.querySelector("#totals").innerText;
        let obtaine = div.querySelector("#obtaine").innerText;
        let percentage = div.querySelector("#percentage").innerText
        let containe =document.querySelector("#containe");
        if(rollno==data){

            heading.style.display = "none"
              
           lower.innerHTML = `
              
                            <h4 style= "display: flex;justify-content: center;align-items: center;color: aqua;">Record Found</h4>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">Rollno${rollno}</b>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">Name : &nbsp;${name}</b>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">Class: &nbsp; ${classes}</b>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">TotalMark:&nbsp; ${totals}</b>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">obtainedMark :&nbsp;${obtaine}</b>
                            <b style = "display: flex;justify-content: center;align-items: center;color: aqua;">percentage:&nbsp;${percentage}</b>`

           
         return
        }else{
             console.log("not same value")
            heading.style.display = "flex"
            div.style.display = "none"
            lower.innerHTML = " "
          
      
                        }

        displayAll.addEventListener("click" , ()=>{
          
            lower.innerHTML.remove()
            div.style.display = "flex"
            
        })
    })


    

})





const uimaker = (data) => {
    document.getElementById("box").innerHTML = "";
    data.map((ele,i) => {
  
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML =ele.name;
    
        let td2 = document.createElement("td");
        td2.innerHTML =ele.number;
    
        let td3 = document.createElement("td");
        td3.innerHTML =ele.Hindi;
    
        let td4 = document.createElement("td");
        td4.innerHTML =ele.English;
        
        let td5 = document.createElement("td");
        td5.innerHTML =ele.Math;
       
        let td6 = document.createElement("td");
        let tScore = add(ele.Hindi, ele.English, ele.Math);
        td6.innerHTML = tScore;
       
        let td7 = document.createElement("td");
        let result = Result(tScore);
        td7.innerHTML = result;

        let td8 = document.createElement("td");
        td8.innerHTML ="update";
       
        let td9=document.createElement("td")
        td9.innerHTML="DELETE"
        td9.addEventListener("click",()=>{
            data.splice(i,1)
          uimaker(data);
  
        })
  
        
        tr.append(td1, td2, td3, td4, td5,td6,td7,td8,td9);
        
        document.getElementById("box").append(tr);
        
    })
    console.log(data)

}
const add = (hindi, english, math) => {
    return (parseInt(hindi) + parseInt(english) + parseInt(math)) ;
}
const Result = (tScore) => {
    return tScore >= 250 ? "Pass" : "Fail";
  
}

 


fetch("http://localhost:3000/student")
    .then(res => res.json())
    .then((data => {
        uimaker(data)

    }))

    const student=(data)=>{
        fetch("http://localhost:3000/student",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })

    }


const handaldata = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        Hindi: document.getElementById("Hindi").value,
        English: document.getElementById("English").value,
        Math: document.getElementById("Math").value,
       
    }

    student(data)
}



document.getElementById("form").addEventListener("submit", handaldata)
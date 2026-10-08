let problemStatement = document.querySelectorAll(".catagory");
let complaintSection = document.querySelectorAll(".complaint-section");
let catagory = document.querySelector("select");
let totalBox= document.querySelector("#box-head div");


console.log(problemStatement); 

function search() {
    let catagory = document.querySelector("select");
    let count = 0;
    for (let i =0; i<problemStatement.length; i++ ){
        if (problemStatement[i].innerText === catagory.value){
            (complaintSection[i]).style.display = "";
            count++;
        }
        else 
            (complaintSection[i]).style.display = "none";
    }
    totalBox.innerText = "Total "+count;
}

catagory.addEventListener("change",search);


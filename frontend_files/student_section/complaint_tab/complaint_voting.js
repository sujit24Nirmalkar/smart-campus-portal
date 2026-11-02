// totalBox.appendChild("");

//fetching the data from php 
let catagory = document.querySelector("select");
let totalBox = document.querySelector("#box-head div");
let complaint =[];


async function load() {
    const con = await fetch('complaint_voting.php')
    complaint = await con.json()
    console.log(complaint)

    // console.log(complaint[0].status)  
    for (let i =0; i<complaint.length; i++){

        const complaintStructue = `
        <!-- complaint-section ${i} -->
        <div class="problem-head">
            <div class="prblm-id"><b>Problem-id</b></div>
            <div class="status">status</div>
        </div>

        <div class="prblm-stmtn">problem description from the user</div>
        <p class="catagory">complaint catagory</p>`


        let el = document.createElement("div")
        el.setAttribute("class", "complaint-section")
        el.innerHTML = complaintStructue
        el.querySelector(".prblm-id").innerText = complaint[i].complaint_id
        el.querySelector(".status").innerText = complaint[i].status
        el.querySelector(".prblm-stmtn").innerText = complaint[i].description
        el.querySelector(".catagory").innerText = complaint[i].complaint_tag
        document.querySelector("#complaint-box").append(el)   
    }

    catagory.addEventListener("change",search);
}

load();





// console.log(problemStatement); 

function search() {
    let problemStatement = document.querySelectorAll(".catagory");
    let complaintSection = document.querySelectorAll(".complaint-section");
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





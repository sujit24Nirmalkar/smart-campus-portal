// totalBox.appendChild("");

//fetching the data from php 
let catagory = document.querySelector("select");
let totalBox = document.querySelector("#box-head div");
let complaint =[];

function load(complaintList) {
    // const con = await fetch('complaint_voting.php')
    // complaint = await con.json()
    // console.log(complaint)

    // console.log(complaint[0].status)  
    for (let i =0; i<complaintList.length; i++){

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
        el.querySelector(".prblm-id").innerText = complaintList[i].complaint_id
        el.querySelector(".status").innerText = complaintList[i].status
        el.querySelector(".prblm-stmtn").innerText = complaintList[i].description
        el.querySelector(".catagory").innerText = complaintList[i].complaint_tag
        totalBox.innerText = "Total "+complaintList.length;
        document.querySelector("#complaint-box").append(el)   
    }

    catagory.addEventListener("change",search);
}


fetch('complaint_voting.php').then(res => {return res.json()})
.then(data => {
    if( data.status == "success" ){

        document.querySelector("#username b").innerText = data.username
        let course = document.getElementById("course")
        let img = document.querySelector("#user-intro img")
        img.setAttribute("src", data.profile_pic)

        if ( data.year == 1 )
            course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>st</sup> Year`
        else if ( data.year == 2 )
            course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>nd</sup> Year`
        else if ( data.year == 3 )
            course.innerHTML = `${data.course} ( ${data.branch} ) ${data.year}<sup>rd</sup> Year`
        else 
            course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>th</sup> Year`

        console.log( document.querySelector("#username b").innerText )
        complaint = data.complaints 
        console.log(complaint)
        load(complaint)
    }
    else {

    }


});






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





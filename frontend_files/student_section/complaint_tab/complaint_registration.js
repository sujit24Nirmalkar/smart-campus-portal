let submitBtn = document.querySelector("#new-complaint-submit");
let confirm = document.querySelector("#confirmation");
let yes =  document.querySelector("#yes");
let no =  document.querySelector("#no");
let input = document.querySelector("textarea");
let catagory = document.querySelector("select");
let issubmitted = false;
let complaintTag = document.querySelector(".complaint");

// complaint text checking function 
function submit() {
    let complaintText = document.querySelector("textarea").value.trim();

    if(complaintText.length > 5 && catagory.value.length > 1) {
        confirm.style.visibility = "visible";
        confirmmation(); 
    }
    else {
        console.log("ERROR");
        console.log(complaintText.length);
    }
}

function yesTap() {
    submitBtn.innerText = "COMPLAINT SUBMITED";
    confirm.style.visibility = "hidden";
    input.readOnly = true;
    catagory.disabled = true;
    submitBtn.style.pointerEvents = "none";
    yes.disabled = true;
    complaintUpdation(); 
}


function complaintUpdation() {
    let recentComplaint = document.querySelector("#recent-complaints");
    let el = document.createElement("div");
    recentComplaint.append(el);
    el.innerHTML=complaintTag.innerHTML; 
    el.setAttribute("class","complaint");
    let complaintStmnt = document.querySelectorAll(".prblm-stmtn");
    complaintStmnt[complaintStmnt.length - 2].innerText = input.value; 
    complaintStmnt[complaintStmnt.length - 1].innerText = catagory.value;
    console.log(complaintStmnt[0]);

}
submitBtn.addEventListener("click", submit);

yes.addEventListener("click", yesTap)

no.addEventListener("click", () => {
    confirm.style.visibility = "hidden";
});
 



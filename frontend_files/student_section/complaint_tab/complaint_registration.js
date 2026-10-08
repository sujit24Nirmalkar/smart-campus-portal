let submitBtn = document.querySelector("#new-complaint-submit");
let confirm = document.querySelector("#confirmation");
let yes =  document.querySelector("#yes");
let no =  document.querySelector("#no");
let input = document.querySelector("textarea");
let catagory = document.querySelector("select");
let complaintTag = document.querySelector(".complaint");



// complaint text checking function 
function submit() {
    let complaintText = document.querySelector("textarea").value.trim();

    if(complaintText.length > 5 && catagory.value.length > 1) {
        confirm.style.visibility = "visible"; 
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
    let complaintCatagory = document.querySelectorAll(".catagory");
    complaintStmnt[complaintStmnt.length - 1].innerText = input.value; 
    complaintCatagory[complaintCatagory.length - 1].innerText = catagory.value;
    let totalBox = document.querySelector("#total-box");
    totalBox.innerText=("Total "+complaintStmnt.length);
}

submitBtn.addEventListener("click", submit);

yes.addEventListener("click", yesTap);

no.addEventListener("click", () => {
    confirm.style.visibility = "hidden";
});
 



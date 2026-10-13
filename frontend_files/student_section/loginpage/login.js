let username = "admin@gmail.com";
let pass = "2025";
let submit = document.querySelector("button")
let loginDetails = document.querySelectorAll(".userLogin")
submit.addEventListener("click", () => {
    if (username === loginDetails[0].value && pass === loginDetails[1].value){
        location.href = "../dashboard_tab/dashboard.html";
    }
    else{
        console.log(loginDetails[0].value,loginDetails[1].value,username,pass);
    }
})
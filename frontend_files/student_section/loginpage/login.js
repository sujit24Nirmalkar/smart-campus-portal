// Fetch the JSON payload from your PHP file

let submit = document.querySelector("button")


function verification (event) {
    event.preventDefault();
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    fetch('login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // We are explicitly sending JSON!
    body: JSON.stringify({ 
        uname: username, 
        pass: password
    }) // Clean object structure, no text concatenations needed!
})
.then(response => {return response.json()})
.then(data => {
    if (data.status === "success")
        window.location.href = ("../dashboard_tab/dashboard.html")
    else {
        submit.innerText = "Login Denied"
    }
});
}

submit.addEventListener('click', verification);
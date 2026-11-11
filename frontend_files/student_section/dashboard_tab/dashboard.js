let attandanceTrend = document.querySelector("#attandance-trend");
let attendanceData = [45, 35, 46, 67, 56, 45];

fetch ('dashboard.php').then(res => {return res.json()})
.then(data => {
    document.querySelector("#username b").innerText = data.username
    let course = document.getElementById("course")
    let img = document.querySelector("#user-intro img")
    img.setAttribute("src", data.profile_pic)
    if (data.year == 1){
        course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>st</sup> Year`
    }
    else if (data.year == 2){
        course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>nd</sup> Year`
    }
    else if (data.year == 3)
        course.innerHTML = `${data.course} ( ${data.branch} ) ${data.year}<sup>rd</sup> Year`
    else 
        course.innerHTML = `${data.course} (${data.branch}) ${data.year}<sup>th</sup> Year`
    console.log(document.querySelector("#username b").innerText)
})
for(let i=0; i<attendanceData.length; i++){
    let el = document.createElement("div");
    attandanceTrend.append(el);
    el.setAttribute("class","attandance-bar");
    el.style.height = attendanceData[i]+"%";
}


let attandanceTrend = document.querySelector("#attandance-trend");
let attendanceData = [45, 35, 46, 67, 56, 45];

for(let i=0; i<attendanceData.length; i++){
    let el = document.createElement("div");
    attandanceTrend.append(el);
    el.setAttribute("class","attandance-bar");
    el.style.height = attendanceData[i]+"%";
}
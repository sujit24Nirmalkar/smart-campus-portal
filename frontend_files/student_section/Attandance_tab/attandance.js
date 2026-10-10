// all the element defination 

let fill = document.querySelectorAll(".fill");
let percentNum = document.querySelectorAll("section p");
let overallAcademics = [];
let description = document.querySelectorAll(".description h1");
let currntAttendance = document.querySelector("#currnt-attandance h1 b");

// calander section
const now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currntMonth = 1;
let days = document.querySelectorAll(".days p");
let date = document.querySelectorAll(".date");
let number = document.querySelectorAll(".date p");

// syntax maths = [attendance, totallecture, percent];
let subjectLecture = {
    Mathematics:[22, 30],
    deld:[24, 40],
    java:[24, 60],
    os:[54, 56],
    webdev:[34, 37],
    bhagwatgita:[2, 5]
}

// dynamic calander Updation 
let arrow = document.querySelectorAll(".arrow-btn");
let subject = document.querySelector("#currnt-attandance p");
let currentIndx = 0; 
let subjectLectureArray = Object.entries(subjectLecture);
let arrayLen = subjectLectureArray.length
 


// 1 = present, 0 = absent, h = holiday;
let dynamicAttendanceRegister = {

    Mathematics: [
    "hhhhh010101011111h0001010000h0", 
    "00000000h10h1h1001001100101101",
    "101110111110h10h110000110hhh1h0", 
    "111h1h0001011h001110010011011h1", 
    "01h1010h11010h1hh000hh01h01110",  
    "1111h0h110100010h10000010h1010",  
    "hh1h00h0h10011h0h11000h11h1h00", 
    "0h10101001010000101hh010h0101h",   
    "0100111101010000h0101h1111011h",  
    "000h1h00011h111h00hh1h0hh111h00",  
    "11h100h110001h0h001hhh001h001h",  
    "1h01101011011hh0h10h1001010010"   
    ],

    deld: [
    "1111111h01h1100h01110h101100000", // January
    "00000101h1h010000h0h1hh10110000", // February
    "1h11100h1h10011101h110hh1hh111",  // March
    "h110001110000hh1100111h01h010hh", // April
    "0000110h00111010100hh0010010100", // May
    "010110h11h11h0010h1010010000h00", // June
    "0h10011h01h00h00000000101001h0",  // July
    "00001000110100h000010h01110001",  // August
    "00h0h100h00h11000h000100001h0h1", // September
    "0h001h0111011000000001010h10h0",  // October
    "h000000101h111hh00h000110110101", // November
    "110hh01010001h110hh110100h10h00"  // December
    ],

    java: [
    "10h01hh110h11h1100110h10h1hh10h", // January
    "000h001hh10hh010h1hh0110h0h11h",  // February
    "111101011h100011h1100111100001",  // March
    "100h0000100010h000101110h10h01",  // April
    "0hhhh1h10h0110010101110h1000h1",  // May
    "1011010h1h1hh111110h111111h0h10", // June
    "h1111001hh100011001111010100001", // July
    "01111h11111h0h1hh10110001hh001",  // August
    "0101010100h1hh00101010h0010100",  // September
    "hhh1h010101011111h0001010000h0",  // October
    "0hh01100h10h1h1001001100101101",  // November
    "101110111110h10h110000110hhh1h0"  // December
    ],

    os: [
    "111h1h0001011h001110010011011h1", // January
    "01h1010h11010h1hh000hh01h01110",  // February
    "1111h0h110100010h10000010h1010",  // March
    "hh1h00h0h10011h0h11000h11h1h00",  // April
    "0h10101001010000101hh010h0101h",  // May
    "0100111101010000h0101h1111011h",  // June
    "000h1h00011h111h00hh1h0hh111h00", // July
    "11h100h110001h0h001hhh001h001h",  // August
    "1h01101011011hh0h10h1001010010",  // September
    "000hh011hhhhh1001001111h1h0010",  // October
    "1001001h00010h110h101010h0hh100", // November
    "1h0101h0hh100h01h0h1110h1001h11"  // December
    ],

    webdev:[
    "110h011h0011100100100000110000",  // January
    "h101h1010h0h11hh100010h10h100h1", // February
    "10h101000011h100111001000001h10", // March
    "hhh0001h00h101h01h1h01h0001h000", // April
    "00111h1101011h00001011110001101", // May
    "h11000011h0110h100011h01011001",  // June
    "10h011h0111111101hh10hh0h010h1",  // July
    "11h0h0h101100h101111100111011h1", // August
    "001100000h10h01111101h001h1111",  // September
    "11000111100h111001h11111001001h", // October
    "10100110h110h0101h00011h10hh00h", // November
    "111100h1001h01h000h01001hh1110"   // December
    ],

    bhagwatgita:[
    "111h1h0001011h001110010011011h1", // January
    "01h1010h11010h1hh000hh01h01110",  // February
    "1111h0h110100010h10000010h1010",  // March
    "hh1h00h0h10011h0h11000h11h1h00",  // April
    "0h10101001010000101hh010h0101h",  // May
    "0100111101010000h0101h1111011h",  // June
    "000h1h00011h111h00hh1h0hh111h00", // July
    "11h100h110001h0h001hhh001h001h",  // August
    "1h01101011011hh0h10h1001010010",  // September
    "000hh011hhhhh1001001111h1h0010",  // October
    "1001001h00010h110h101010h0hh100", // November
    "1h0101h0hh100h01h0h1110h1001h11"  // December
    ]
};

// functions for works 

// calculating the pecentage of attendance;
function academics(parameter) {
    let totallecture = 0;
    let attendance = 0; 
    
    for (let i in parameter){
        totallecture += parameter[i][1];
        attendance += parameter[i][0];
        parameter[i].push(parameter[i][0]/parameter[i][1]*100);
    }

    let percent = attendance/totallecture*100;
    return [percent, attendance, totallecture,];
}

// fillig the progress bar 
function fillColor(percentage, indx) {
    if ( percentage <= 50) {
        let subpercent = percentage/50; 
        let hue = (60 - 0)*subpercent;
        fill[indx].style.backgroundColor = `hsl( ${hue}, 76% , 54%)`;
        fill[indx].style.width= percentage +"%";
    }
    else {
        let subpercent = percentage/50; 
        let hue = (120 - 60)*subpercent;
        fill[indx].style.backgroundColor = `hsl( ${hue}, 76% , 54%)`;
        fill[indx].style.width= percentage +"%";
    }
}

// function for calendar updation 
function calanderUpdation(firstDayofMonth, totalDays, attendance) {

    let count = 1;
    let i = 0;

    //fill empty days
    for(i = 0; i<firstDayofMonth; i++){ 
        number[i].innerText = "";
        number[i].style.backgroundColor = "rgb(197, 182, 224)";  
    }

    //fill occupied days and presenties 
    for (let j = firstDayofMonth; j<totalDays+i; j++){
        number[j].innerText = count;
        if (attendance[count-1] === "0")
            number[j].style.backgroundColor = "rgb(214, 76, 76)";
        else if (attendance[count-1] === "h")
            number[j].style.backgroundColor = "rgba(137, 20, 224, 0.8)";
        else 
            number[j].style.backgroundColor = "rgb(85, 170, 100)";
        count++;   
    }

    //fill last empty days
    for (let j = count+i-1; j<42; j++){
        number[j].innerText = "";
        number[j].style.backgroundColor = "rgb(197, 182, 224)";
    }
}

//arrow btn function for Attendance
function arrowCalLeft () {
    currntMonth--;
    let firstDayofMonth = new Date(now.getFullYear(), now.getMonth()+currntMonth, 1).getDay();
    let totalDays = new Date(now.getFullYear(), now.getMonth()+1+currntMonth, 0).getDate();
    let subject = document.querySelector("#currnt-attandance div p");

    if (now.getMonth()+currntMonth >= 0) {
        console.log(subject, firstDayofMonth,totalDays,currntMonth,now.getMonth());
        document.querySelector("#calander h4").innerText = months[now.getMonth()+currntMonth];  //calendar month head updation 
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);
    }
    else 
        currntMonth = 0;
}

function arrowCalRight () {
    currntMonth++;
    let subject = document.querySelector("#currnt-attandance p");
    let firstDayofMonth = new Date(now.getFullYear(), now.getMonth()+currntMonth, 1).getDay();
    let totalDays = new Date(now.getFullYear(), now.getMonth()+1+currntMonth, 0).getDate();

    if (now.getMonth()+currntMonth  <= 11 ){

        console.log(subject, firstDayofMonth,totalDays,currntMonth);
        document.querySelector("#calander h4").innerText = months[now.getMonth()+currntMonth];  //calendar month head updation 
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);
    }
    else 
        currntMonth = 0;
}

//arrow btn function for current Attendance
function arrowleft () {
    currentIndx--; 
    let firstDayofMonth = new Date(now.getFullYear(), now.getMonth()+currntMonth, 1).getDay();
    let totalDays = new Date(now.getFullYear(), now.getMonth()+1+currntMonth, 0).getDate();
    if (currentIndx < 0 ){
        subject.innerText = subjectLectureArray[arrayLen-1][0];
        currentIndx = arrayLen-1;
        currntAttendance.innerText = parseFloat(subjectLectureArray[currentIndx][1][2].toFixed(2))+"%";
        console.log(subject, firstDayofMonth,totalDays,currntMonth,now.getMonth());
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);
    }
    else {
        subject.innerText = subjectLectureArray[currentIndx][0];  //giving subject value
        currntAttendance.innerText = parseFloat(subjectLectureArray[currentIndx][1][2].toFixed(2))+"%";  //giving percentage value
        console.log(subject, firstDayofMonth,totalDays,currntMonth,now.getMonth());
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);  

    }

}

function arrowright () {
    currentIndx++; 
    let firstDayofMonth = new Date(now.getFullYear(), now.getMonth()+currntMonth, 1).getDay();
    let totalDays = new Date(now.getFullYear(), now.getMonth()+1+currntMonth, 0).getDate();
    if (currentIndx > arrayLen-1){
        subject.innerText = subjectLectureArray[0][0];
        currentIndx = 0;
        currntAttendance.innerText = parseFloat(subjectLectureArray[currentIndx][1][2].toFixed(2))+"%";
        console.log(subject, firstDayofMonth,totalDays,currntMonth,now.getMonth());
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);
    }
    else {
        subject.innerText = subjectLectureArray[currentIndx][0];  //giving subject value
        currntAttendance.innerText = parseFloat(subjectLectureArray[currentIndx][1][2].toFixed(2))+"%";  //giving percentage value
        console.log(subject, firstDayofMonth,totalDays,currntMonth,now.getMonth());
        calanderUpdation(firstDayofMonth, totalDays, dynamicAttendanceRegister[subject.innerText][now.getMonth()+currntMonth]);
    } 
         
}

overallAcademics = academics(subjectLecture);

let indx = 0;
for (let i in subjectLecture){
    fillColor(subjectLecture[i][2], indx);  
    percentNum[2*indx + 1].innerText = parseFloat(subjectLecture[i][2].toFixed(2))+"%";
    indx++;
}

for (let i = 0; i<3; i++){
    if (i == 0){
        description[i].innerText = parseFloat(overallAcademics[i].toFixed(2))+"%";
        currntAttendance.innerText = parseFloat(overallAcademics[i].toFixed(2))+"%"
    }
    else
        description[i].innerText = parseFloat(overallAcademics[i].toFixed(2));
}








//final events and methods 

subject.innerText = subjectLectureArray[0][0];
arrow[0].addEventListener("click", arrowleft);
arrow[1].addEventListener("click", arrowright);


arrow[2].addEventListener("click", arrowCalLeft);
arrow[3].addEventListener("click", arrowCalRight);
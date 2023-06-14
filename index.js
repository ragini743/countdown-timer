// let targrtDate=new dat
let tomorrowDate=prompt("enter a date and time eg: 2023-05-05T20:00:00");

let tmDate = new Date()

if (tomorrowDate) {
    tmDate = new Date(tomorrowDate)
} else {
    //add a day
    tmDate.setDate(tmDate.getDate() + 1)
}

function timer(){
    console.log("hello");
    let todayDate=new Date()

    let t=new Date()

    let diff = (tmDate-t)/1000;

    let second=Math.floor(diff % 60);

    console.log('second', second);

    let minute=Math.floor((diff/60)%60);

    console.log("minute",minute)

    let hour=Math.floor((diff/3600)%24);

    console.log("hour",hour)

    let day=Math.floor(diff/3600/24);

    console.log("day",day)
    let changeDay=document.getElementById("days")

    formateHour=document.getElementById("hour")

    formateMinute=document.getElementById("minute")

    formateSecond=document.getElementById("second")

changeDay.textContent=day

formateHour.textContent=hour

formateMinute.textContent=minute
formateSecond.textContent=second
    if(diff<=0){
        clearInterval(intervalId)
    }
}


intervalId=setInterval(timer, 1000);



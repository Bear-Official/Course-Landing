const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let days = 18;
let hours = 18;
let minutes = 18;
let seconds = 18;

const x = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;
    if (distance > 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    document.getElementById("days").innerHTML = days + "";
    document.getElementById("hours").innerHTML = hours + "";
    document.getElementById("minutes").innerHTML = minutes + "";
    document.getElementById("seconds").innerHTML = seconds + "";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "EXP";
        document.getElementById("hours").innerHTML = "EXP";
        document.getElementById("minutes").innerHTML = "EXP";
        document.getElementById("seconds").innerHTML = "EXP";
    }
});

// var myNum1 = 2.9;
// var myNum2 = 2.7;

// if (myNum1 > myNum2) {
//     console.log("bigger");
// } else {
//     console.log("lower");
// }

// let firstName = "Daniel";
// let age = 18;

// console.log("daniel este mare " + firstName + (", are multi ani"));

// let a = 20;
// let b = 23;
// let c = 30;

// console.log(a * b);
// console.log(a / b);
// console.log(a + b);


// slider change time is set to 5 sec
const intervalTime = 5000;
let slideInterval;

const rotateDown = () => {

    document.querySelector(".div1").style.transform = "rotate(180deg) translateY(-100vh)";
    document.querySelector(".div1").style.transition = "all 1.3s ease-in-out 0.7s";

    document.querySelector(".div2").style.transform = "rotate(180deg) translateY(100vh)";
    document.querySelector(".div2").style.transition = "all 1.3s ease-in-out";

    slideInterval = setInterval(rotateUp, intervalTime);
}

const rotateUp = () => {

    document.querySelector(".div1").style.transform = "rotate(0deg) translateY(0vh)";
    document.querySelector(".div1").style.transition = "all 1.3s ease-in-out";

    document.querySelector(".div2").style.transform = "rotate(-0deg) translateY(0vh)";
    document.querySelector(".div2").style.transition = "all 1.3s ease-in-out 0.5s";

    slideInterval = setInterval(rotateDown, intervalTime);

}

// Auto slide

 rotateUp();
  
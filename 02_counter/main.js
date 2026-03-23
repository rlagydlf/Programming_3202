let count = 0;


// HTML -> JS
// const resultH1 = document.querySelector("h1");
// const resultH1 = document.querySelectorAll("h1")[0];
// const resultH1 = document.getElementsByTagName("h1")[0];
// const plusButton = document.getElementsByTagName("button")[0];
// const minusButton = document.getElementsByTagName("button")[1];
const resultH1 = document.getElementById("result");
// const resultH1 = document.querySelector("#result");
// const resultH1 = result;
const plusButton = document.getElementsByClassName("plusbtn")[0];

// 숫자 증가하자

// plusButton.addEventListener("click",() => {
//     count++; // count += 1; count = count + 1;
//     //숫자 표시하자
//     resultH1.innerHTML = count
// })

// plusButton.addEventListener("click", function 처리함수(){
//     count++; // count += 1; count = count + 1;
//     //숫자 표시하자
//     resultH1.innerHTML = count
// })

// plusButton.onclick = (() => {
//     count++; // count += 1; count = count + 1;
//     //숫자 표시하자
//     resultH1.innerHTML = count
// })

function plus(){
    count++; // count += 1; count = count + 1;
    //숫자 표시하자
    resultH1.innerHTML = count
}


// (함수정의)();
// (function() {


// })()

minusButton.addEventListener("click", function 처리함수(){
    count--; 
    resultH1.innerHTML = count
})

let count = 0;
document.getElementById("heart-btn").addEventListener("click",function(){
    // console.log("button click")
    count++;
    document.getElementById('heart-count').innerText = count;
})
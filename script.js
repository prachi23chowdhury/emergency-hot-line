let count = 0;
const historyData = [];
let copyCount = 0;
let balance =100;

// heart count
document.getElementById("heart-btn1").addEventListener("click", function(){
    heartCount('heart-btn1')
})
document.getElementById("heart-btn2").addEventListener("click", function(){
    heartCount('heart-btn2')
})
document.getElementById("heart-btn3").addEventListener("click", function(){
    heartCount('heart-btn3')
})
document.getElementById("heart-btn4").addEventListener("click", function(){
    heartCount('heart-btn4')
})
document.getElementById("heart-btn5").addEventListener("click", function(){
    heartCount('heart-btn5')
})
document.getElementById("heart-btn6").addEventListener("click", function(){
    heartCount('heart-btn6')
})


// coin section
document.getElementById("call-btn1").addEventListener("click", function(){
    cutCoin("call-btn1")
   
})
document.getElementById("call-btn2").addEventListener("click", function(){
    cutCoin("call-btn2")
  
})
document.getElementById("call-btn3").addEventListener("click", function(){
    cutCoin("call-btn3")
   
})
document.getElementById("call-btn4").addEventListener("click", function(){
    cutCoin("call-btn4")
  
})
document.getElementById("call-btn5").addEventListener("click", function(){
    cutCoin("call-btn5")

})
document.getElementById("call-btn6").addEventListener("click", function(){
    cutCoin("call-btn6")
   
})


// copy section

document.getElementById("copy-btn1").addEventListener("click", function(){
    copyCounts("copy-btn1")
})
document.getElementById("copy-btn2").addEventListener("click", function(){
    copyCounts("copy-btn2")
})
document.getElementById("copy-btn3").addEventListener("click", function(){
    copyCounts("copy-btn3")
})
document.getElementById("copy-btn4").addEventListener("click", function(){
    copyCounts("copy-btn4")
})
document.getElementById("copy-btn5").addEventListener("click", function(){
    copyCounts("copy-btn5")
})
document.getElementById("copy-btn6").addEventListener("click", function(){
    copyCounts("copy-btn6")
})


// alert when click call
const callButtons = document.getElementsByClassName('call')
  for(const button of callButtons){
    button.addEventListener('click', function(){
      const index = this.dataset.index;
      const p = document.getElementById('p' +index).innerText;
      const num = document.getElementById('num' +index).innerText;

      alert("📞" + p +" " + num)
    })
  }



// function
function heartCount(id){
    count++;
    document.getElementById('heart-count').innerText = count;
}

function cutCoin(id) {
    if (balance < 20) {
      alert("❌ You don’t have enough coins. To make a call, you need at least 20 coins.");
      return; // Stop the function if not enough balance
    }

    balance -= 20;
    document.getElementById("t-balance").innerText = balance;
  }
function copyCounts(id){
         copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
}



  



      
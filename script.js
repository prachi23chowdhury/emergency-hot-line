let count = 0;
const historyData = [];
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

// function
function heartCount(id){
    count++;
    document.getElementById('heart-count').innerText = count;
}



let balance = 100; 
    
    const balanceEl = document.getElementById("t-balance");
    const callBtn = document.getElementById("call-btn");
    const coinBtn = document.getElementById("coinBtn");
    
    
    callBtn.addEventListener("click", function() {
      if (balance >= 20) {
        balance -= 20;
        balanceEl.innerText = balance;
        coinBtn.disabled = false; 
        coinBtn.click(); 
      }
      
       else {
        if (balance < 20) {
        alert("❌You don’t have enough coins. To make a call, you need at least 20 coins.");
      } 
      else {
        alert("✅ Call was successful!");
        coinBtn.disabled = true;
      }
    }
  });
    
    coinBtn.addEventListener("click", function() {
    
      console.log("Coin button clicked, balance is now " + balance);
      coinBtn.disabled = true;
    });

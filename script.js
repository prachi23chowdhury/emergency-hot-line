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

      alert( "📞 " + "Calling"+" "+ p + " " + num)
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
      return; 
    }

    balance -= 20;
    document.getElementById("t-balance").innerText = balance;
  }
function copyCounts(id){
         copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
}

// clearBtn work

const clearBtn = document.getElementById("clear-btn");
const callHistory = document.getElementById("call-history");

clearBtn.addEventListener("click", function() {
  
  callHistory.innerHTML = "";
});


// copyBtn text
function copyNumber(id) {
    const numText = document.getElementById(id).innerText;

    const tempInput = document.createElement("textarea");
    tempInput.value = numText;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);
}






function addCallHistory(name, number) {
  const data = {
    name: name,
    number: number,
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);

  const container = document.getElementById("history-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="flex justify-between items-center bg-[#FAFAFA] p-2 rounded mb-2">
      <div>
        <h3 class="font-bold">${data.name}</h3>
        <p>${data.number}</p>
      </div>
      <p class="text-sm text-gray-500">${data.date}</p>
    </div>
  `;
  container.appendChild(div);
}

document.getElementById("call-btn1").addEventListener("click",function(){ addCallHistory("National Emergency Number", "999")});
document.getElementById("call-btn2").addEventListener("click",function(){ addCallHistory("Police Helpline Number", "999")});
document.getElementById("call-btn3").addEventListener("click",function(){ addCallHistory("Fire Service Number", "999")});
document.getElementById("call-btn4").addEventListener("click",function(){ addCallHistory("Ambulance Service", "1994-999999999")});
document.getElementById("call-btn5").addEventListener("click",function(){ addCallHistory("Women & Child Helpline", "109")});
document.getElementById("call-btn6").addEventListener("click",function(){ addCallHistory("Anti-Corruption Helpline", "106")});

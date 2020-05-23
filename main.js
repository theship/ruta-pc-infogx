var todayFunded = 20000,
    todayWritten = 15000;

// These values could be pulled & parsed from li in html,
// but keeping it quick, here.    
var goalFund = 30000,
    goalWritten = 60000;

numsToday();

function numsToday() {

  // LETTERS FUNDED
  const fundsList = document.querySelector('#funds-x');
  const longFund = document.querySelector("#funds-x > li:nth-child(7)");

  let fundsWidth = longFund.clientWidth;
  let fundsHeight = (todayFunded / goalFund) * longFund.clientHeight;

  let lettersFunded = document.createElement("div"); 
  lettersFunded.setAttribute("class", "lettersFunded");

  lettersFunded.style.height          = fundsHeight;
  lettersFunded.style.width           = fundsWidth;
                   
  lettersFunded.textContent = "<------ FUNDED to date";

  fundsList.appendChild(lettersFunded);

  // LETTERS WRITTEN
  const writtenList = document.querySelector('#written-x');
  const longWritten = document.querySelector("#written-x > li:nth-child(7)");

  // 
  let writtenWidth = longWritten.clientWidth;
  let writtenHeight = (todayWritten / goalWritten) * longWritten.clientHeight;

  let lettersWritten = document.createElement("div"); 
  lettersWritten.setAttribute("class", "lettersWritten");

  lettersWritten.style.height          = writtenHeight;
  lettersWritten.style.width           = writtenWidth;
                   
  lettersWritten.textContent = "<------ WRITTEN to date";

  writtenList.appendChild(lettersWritten);

}

window.addEventListener("orientationchange", function() {
  console.log(screen.orientation);
}, false);
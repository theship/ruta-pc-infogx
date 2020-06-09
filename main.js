var todayFunded = 20000,
  todayWritten = 20000;

// These values could be pulled & parsed from li in html,
// but keeping it quick, here.
var goalFund = 30000,
  goalWritten = 60000;

function numsToday() {
  // LETTERS FUNDED
  const fundsList = document.querySelector("#funds-x");
  const longFund = document.querySelector("#funds-x > li:nth-child(7)");

  let fundsWidth = longFund.clientWidth;
  let fundsHeight = (todayFunded / goalFund) * longFund.clientHeight;

  let lettersFunded = document.createElement("div");
  fundsList.appendChild(lettersFunded);
  setFunded();


  // LETTERS WRITTEN
  const writtenList = document.querySelector("#written-x");
  const longWritten = document.querySelector("#written-x > li:nth-child(7)");

  let writtenWidth = longWritten.clientWidth;
  let writtenHeight = (todayWritten / goalWritten) * longWritten.clientHeight;

  let lettersWritten = document.createElement("div");
  writtenList.appendChild(lettersWritten);
  setWritten();


  function setWritten() {
    lettersWritten.setAttribute("class", "lettersWritten");
    // codepen.io doesn't allow for direct style change, must use setAttribute>style instead
    lettersWritten.setAttribute("style", "height:"+writtenHeight+"px;width:"+writtenWidth+"px;");
    // lettersWritten.style.height = writtenHeight;
    // lettersWritten.style.width = writtenWidth;
    lettersWritten.textContent = "<------ WRITTEN to date";
  }

  function setFunded() {
    lettersFunded.setAttribute("class", "lettersFunded");
    // codepen.io doesn't allow for direct style change, must use setAttribute>style instead
    lettersFunded.setAttribute("style", "height:"+fundsHeight+"px;width:"+fundsWidth+"px;");
    // lettersFunded.style.height = fundsHeight;
    // lettersFunded.style.width = fundsWidth;
    lettersFunded.textContent = "<------ FUNDED to date";
  }
}

window.addEventListener(
  "orientationchange",
  function () {
    console.log(screen.orientation);
    location.reload(true);
  },
  false
);

window.addEventListener("load", () => {
  numsToday();
});

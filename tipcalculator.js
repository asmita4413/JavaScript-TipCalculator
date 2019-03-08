//Calculate Tip

function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleshare").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  if(numOfPeople=="more than 4")
  {
    numOfPeople=5;
    
  }
  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  //next line allows us to always have two digits after decimal point  
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total+"$";

//Hide the tip amount on load
//document.getElementById("totalTip");
//style.display = "none";
//document.getElementById("each").style.display = "none";
}


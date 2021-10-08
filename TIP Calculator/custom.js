console.log("Javascript Tip Calculator");



// custom function 
function calculateTip(){

    // store the data of inputs 

    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var numPeople = document.getElementById('totalPeople').value;

    // Quick Validation
    if(billAmount === "" || serviceQuality == 0 ) {
        return window.alert("please Enter some value");
    }
    
    // check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "none";
    }

    // some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total);
    total = total.toFixed(2);

    // window.alert(total, numPeople);
    document.getElementById("total_tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the Tip Amount on Load

document.getElementById('total_tip').style.display = "none";

// Clicking the function calls our custom function
document.getElementById('calculate').onclick = function(){
    calculateTip();
}
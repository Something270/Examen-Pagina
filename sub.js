elemsubbutton = document.getElementById("sub_button");
console.log(elemsubbutton);

function showMessage(message, isError){
  //makes a welcome message
  var elemWelcomeMessage = document.createElement("p");

  elemWelcomeMessage.innerText = message;
  elemWelcomeMessage.id = "user_message";
  
  if(isError){
      elemWelcomeMessage.className = "error-message";
  }
    var elemPreviousMessage = document.getElementById("user_message");


    if(elemPreviousMessage) {
        elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
    }


  var elemsubform = document.getElementById("sub-form");
  elemsubform.appendChild(elemWelcomeMessage);


  }
 


 elemsubbutton.onclick = function() {
 
    var elemInput1 = document.getElementById("Input1");
    var elemInput2 = document.getElementById("Input2");
    var elemInput3 = document.getElementById("Input3");
    var elemInput4 = document.getElementById("Input4");
    var elemInput5 = document.getElementById("Input5");
    
  console.log(elemInput1);
  console.log(elemInput2);
  console.log(elemInput3);
  console.log(elemInput4);
  console.log(elemInput5);


  var Input1 = elemInput1.value;
  var Input2 = elemInput2.value;
  var Input3 = elemInput3.value;
  var Input4 = elemInput4.value;
  var Input5 = elemInput5.value;
    
  console.log(Input1);
  console.log(Input2);
  console.log(Input3);
  console.log(Input4);
  console.log(Input5);

    if(Input1 === "" && Input2 ==="" && Input3==="" && Input4==="" && Input5===""){

        showMessage("Please add info",true);
    }
     else if(Input1 === ""){
      showMessage("Missing name",true)
    }
    else if(Input2 === ""){
      showMessage("Missing address",true)
    }
    else if(Input3 === ""){
      showMessage("Missing zip code",true)
    }
    else if(Input4 === ""){
      showMessage("Missing CC number",true)
    }
    else if(Input5 === ""){
      showMessage("Missing Security code",true)
    }
    else{
      showMessage("Information submitted",true)
    }
 }
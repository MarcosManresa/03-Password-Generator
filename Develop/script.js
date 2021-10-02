// User inputed variables:
var enter;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
// Password start variable values:
// Special Character:
char = ["!", "#", "$", "%" , "&" , "'" , "(",")", "*" , "+" , "," , "-" , ".", "/", "@", "~", "?", "<", ">", "_", "`" ];
// Numerical characters
number = [1,2,3,4,5,6,7,8,9];
// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Spacing for the uppercase conversion
space = [];
//Choices declared outside the if statement so they can be declared in the condition
var decision;
// variable to convert letters to uppercase letters
var toUpper = function(x){
  return x.toUpperCase();
}
// a variable for lowercase to uppercase conversion
alphabet2 = alphabet.map(toUpper);
// variable aquire being used to select the .generate class
var aquire = document.querySelector("#generate");
// Whenever the #generate button is clicked the generate password function is called, Once the password function is executed, it prints the randomly generated password.
aquire.addEventListener("click", function(){
    passwordgen = generatePassword();
    document.getElementById("password").placeholder = passwordgen;
});

  //Function for generating the password
function generatePassword(){
  // Asking for user input var
  enter = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"))
  if(!enter){
    // user validation input section start
    alert("This needs a value");
  }else if(enter < 8 || enter > 128){
    // User input prompt 
    enter = parseInt(prompt("a number between 8 and 128 must be chosen"));
  }else{
    //user input confirmation
    confirmNum = confirm("Will this contain numbers?");
    confirmChar = confirm("Will this contain special characters");
    confirmUpper = confirm("Will this contain Uppercase letters?");
    confirmLower = confirm("Will this contain Lower Characters");
  };
  //if for all 4 none possible options
  if(!confirmChar && !confirmNum && !confirmUpper && !confirmLower){
    choices = alert("A criteria must be chosen!");
  }
  // else if  for all  4 posibile options 
  else if(confirmChar && confirmLower && confirmNum && confirmUpper){
    choices = char.concat(number, alphabet, alphabet2);
  }
  // For All 3 Possibilities 
  else if(confirmChar && confirmNum && confirmLower){
    choices = char.concat(number, alphabet);
  }else if(confirmChar && confirmUpper && confirmLower){
    choices = char.concat(alphabet2, alphabet);
  }else if(confirmChar && confirmNum && confirmUpper){
    choices = char.concat(alphabet2, number);
  }else if(confirmNum && confirmUpper && confirmLower){
    choices = number.concat(alphabet2, alphabet);
  }
  // All 2 posibilities
  else if(confirmChar && confirmLower){
    choices = char.concat(alphabet);
  }else if(confirmChar && confirmUpper){
    choices = char.concat(alphabet2);
  }else if(confirmUpper && confirmLower){
    choices = alphabet2.concat(alphabet);
  }else if(confirmChar && confirmNum){
      choices = char.concat(number);
  }else if(confirmNum && confirmLower){
    choices = number.concat(alphabet);
  }else if(confirmNum && confirmUpper){
    choices = number.concat(alphabet2);
  }
  // ALl Single Posibilities
  else if(confirmChar){
    choices = char;
  }else if(confirmUpper){
    choices = alphabet2;
  }else if(confirmLower){
    choices = alphabet;
  }else if(confirmNum){
    choices = number;
  }
  // Variable password as a placeholder for user generated length array
  var password = [];
  //Starting Random variable selections:
  //random variable selection
  for(var i = 0; i < enter; i++){
    var choicesPicked = choices[Math.floor(Math.random() * choices.length)];
    password.push(choicesPicked);
  }

  // Coverting the numbers in the array to strings so it appears as a copy and paste value
  var passwordgen = password.join("")
    inputUser(passwordgen);
    return passwordgen;
}
// Puts the randomly generated password into the textbox
// text content for putting the password into a string.
function inputUser(passwordgen){
  document.getElementById("password").textContent = passwordgen;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

function generatePassword() {



  var Letters = "abcdefghijklmnopqrstuvwxyz";
  var UpperCase="ABCDEFGHIJKLMNOPQRSTUVWYZ"
  var Special = "!#$%&/()="; 

  alert("password must length must be at least 8 characters and no more than 128 characters")

  do {
  var Nletters = Number(prompt("Enter quantity of letters"));
  var Ncapital= Number(prompt("Enter quantity of capital letters"));
  var Nspecial =Number(prompt("Enter quantity of special characters"));
  var Nnumbers =Number(prompt("Enter quantity of numbers"));  
  var PasswordLength= Ncapital+Nletters+Nspecial+Nnumbers;
    if (PasswordLength<8 || PasswordLength> 128){
      alert("password length it's "+ PasswordLength +",password should be at least 8 characters and no more than 128 characters")
    }
  } while (PasswordLength<8 || PasswordLength> 128)
  

  var LettersCount=0;
  var CapitalCount=0;
  var SpecialCount=0;
  var NumbersCount=0;
  var i=0;
  var password="";
  

  do {
    var choice = Math.floor(Math.random() * 4);
    console.log(choice)
    i=i+1

     if (choice==0) {
       if (LettersCount<Nletters) {
        var randPos = (Math.floor(Math.random()*Letters.length))
         password = password + (Letters.charAt(randPos));
         LettersCount= LettersCount+1;
       }
     } else if (choice==1) {
       if (CapitalCount<Ncapital) {
         randPos = (Math.floor(Math.random()*UpperCase.length))
         password = password + (UpperCase.charAt(randPos));
         CapitalCount= CapitalCount+1;
       }
     } else if (choice==2) {
     if (SpecialCount<Nspecial) {
         password = password +  Special.charAt(Math.floor(Math.random()*9))
         SpecialCount= SpecialCount+1
        }
       } else if (choice==3){
     if (NumbersCount<Nnumbers) {
          randPos = Math.floor(Math.random()*9)
          randPos = randPos.toString();
          password = password + randPos  
          NumbersCount= NumbersCount+1
        }
     }
  console.log(password)
  console.log("Password Lenght"+ password.length)
  console.log("Capital "+ CapitalCount)
  console.log("Number "+ NumbersCount)
  console.log("special "+ SpecialCount)
  console.log("letters "+ LettersCount)
  } while ( password.length<PasswordLength);

  return password

}





//  Add event listener to generate button
 generateBtn.addEventListener("click", writePassword)

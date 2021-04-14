function dice(){
  var r=(Math.random())*6;
  randomNumber=Math.floor(r)+1;
  return randomNumber;
}
var rn1 =dice();//dice1
var diceImage1= "images/"+"dice"+rn1 +".png"
document.getElementsByClassName("img1")[0].setAttribute("src",diceImage1);

var rn2 =dice();//dice2
var diceImage1= "images/"+"dice"+rn2 +".png"
document.getElementsByClassName("img2")[0].setAttribute("src",diceImage1);

if(rn1>rn2){
    document.getElementsByTagName("h1")[0].innerHTML="Player1 wins 🚩";
}
else if(rn1<rn2){
    document.getElementsByTagName("h1")[0].innerHTML="Player2 wins 🚩";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Drawn 🏳️";
}


let q = 0;
let start = false;
let a;
let randomoper;
let b;
let oper = [];
let randomposition;
let ansa = [];
let ans;
let userclicked = -1;
let time = 15;
let st = 0,userans=0;
let username;
let useroption = 0;
let noqu=100000;
function started(){
  if (!start) {
    $(".timer").removeClass("widthse");
   

       for (i = 1; i <= 4; i++) {
 $("#s" + i).removeClass("right");
      $("#s" + i).removeClass("wrong");

    }

    userclicked = 0;
    st = 1;

    username = prompt("Enter your name");

    maine();
    start = true;
    $(".bt").css("display","none");
  }
}

$(document).keypress(function () {
let vallll=$(".cont").css("display");
if(vallll=="block")
  started();

});

$(".bt").click(function(){

  started();



})

setInterval(() => {
  if (userclicked == 0 && time < 0 && start) {
    over();
    congo(2);
    userclicked = 1;
  } else if (st == 1 && time >= 0 && q) {
    $(".timer").text(time);
  }

  time--;
}, 1000);

$(".ans").click(function () {
  if(userans==1){userclicked = 1;userans=0;
  aq = new Audio("green.mp3");
  aq.play();

  useroption = $(this).attr("id");

  $("#" + useroption).addClass("press");

  setTimeout(() => {
    $("#" + useroption).removeClass("press");
  }, 100);

  userans = $(".an" + useroption).text();
  console.log(userans);
  if (userans == ans) {
    if (start === true) {
      setTimeout(maine, 1500);
    }
  } else {
    $("#" + useroption).removeClass("press");
    over();
    congo(0);
    
  }
  
}
});

function congo(ff){
   $(".timer").text("15s");
   $(".timer").removeClass("widthse");
   

   for (i = 1; i <= 4; i++) {
$("#s" + i).removeClass("right");
  $("#s" + i).removeClass("wrong");

}
    useroption = 1;
    st = 0;
    userans=0;
    userclicked = 1;

time=15;
  start = 0;
  $(".cont").css("display","none");
  $(".new").css("display","flex");$(".newbutton1").css("display","none");
  if(ff==1)
  {$(".newh1").html("Congratulations 🥳🥳 " + username +" Scored " + noqu + "/" + noqu );}
  else if(ff==2){
    $(".newh1").html("TIME-OVER, " + username + " Score = " + (q - 1));
  }
  else{
    $(".newh1").html("GAME-OVER, " + username + " Score = " + (q - 1));
  }
 $(".quess").text(
    "Start Please"
  );
  for (i = 1; i <= 4; i++) {
   
      $(".ans" + i).text("Option "+i);
     
    
  }
  q=0;
 if (!start) {
      $(".conth1").text("Press any key to Restart the Game");
    }

}
$("button").click(function(){
  aq = new Audio("red.mp3");
  aq.play();
})

function maine() {
  useroption = 0;
  st = 1;
  time = 15;userans=1;
  userclicked = 0;
  aq = new Audio("red.mp3");
  aq.play();
  q++;
 
if(q>noqu){
  congo(1);
}
else 
{
  $(".conth1").text("QUESTION - " + q);
  a = Math.random();

  a = a * 200;
  a = Math.floor(a);
  b = Math.random();
  b = b * 200;
  b = Math.floor(b);

  oper = ["+", "*", "-", "%(rem)"];

  randomoper = Math.random();
  randomoper = randomoper * 4;
  randomoper = Math.floor(randomoper);
  $(".quess").text(
    "Q" + q + ". " + a + " " + oper[randomoper] + " " + b + " = ?"
  );
  if (randomoper == 0) {
    ans = a + b;
  } else if (randomoper == 1) {
    ans = a * b;
  } else if (randomoper == 2) {
    ans = a - b;
  } else {
    ans = a % b;
  }
  randomposition = Math.random();
  randomposition = randomposition * 4;
  randomposition = Math.floor(randomposition);
  randomposition = randomposition + 1;
  $(".ans" + randomposition).text("   " + ans);
  ansa = [];

  ansa[0] = ans + 1;
  ansa[1] = ans - 1;
  ansa[2] = ans + 2;

  let k = 0;
  for (i = 1; i <= 4; i++) {
    if (i != randomposition) {
      $(".ans" + i).text("   " + ansa[k]);
      k++;
    }
  }}
}
function startagain() {
 
  start = false;
  $(".bt").css("display","inline-block");
}
function over() {
  st = 0;
  au = new Audio("wrong.mp3");

  au.play();
  $("body").addClass("gameover");

  setTimeout(() => {
    $("body").removeClass("gameover");
  }, 200);
 
  if (userclicked == 0) {
    $(".timer").text("TIME OVER");
    $(".timer").addClass("widthse");
  }
  $("#s" + randomposition).addClass("right");

  $("#" + useroption).addClass("wrong");
  setTimeout(() => {
 
    if (!start) {
      $(".conth1").text("Press any key to Restart the Game");
    }
  }, 6000);

  startagain();
}

var i = 0;
var txt = "MATH";
var speed = 200;
function Reverse() {
  if (i >= 0) {
    document.getElementById("mainmath").innerHTML = txt.substr(0, i);
    i--;
    setTimeout(Reverse, 80);
  } else {
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainmath").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(Reverse, 1500);
  }
}

setTimeout(typeWriter, 280);

$(".newbutton1").click(function (){
location.reload();

})

$(".mainbutton").click(function (){

$(".main").css("display","none");
$(".second").css("display","flex");$(".foo").css("display","none");
$(".newbutton1").css("display","block");
})
$(".newbutton").click(function (){
  $(".second").css("display","flex");
  $(".new").css("display","none");$(".newbutton1").css("display","block");

})
$(".button2").click(function (){
noqu=Number(prompt("No. of Question You want to answer"));

while(noqu<=0 || noqu%1!=0 || noqu==100000){
  noqu=Number(prompt("Enter Valid Questions")); 
}
$(".second").css("display","none");
$(".cont").css("display","block");
$(".foo").css("display","none");
  })
  $(".button1").click(function (){

    $(".second").css("display","none");
    $(".cont").css("display","block");
    $(".foo").css("display","none");
  })

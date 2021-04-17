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
let st = 0;
let username;
let useroption = 0;
function started(){
  if (!start) {
    $(".timer").removeClass("widthse");
    $("#s" + randomposition).removeClass("right");

       for (i = 1; i <= 4; i++) {

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

  started();

});

$(".bt").click(function(){

  started();



})

setInterval(() => {
  if (userclicked == 0 && time < 0) {
    over();
    userclicked = 1;
  } else if (st == 1 && time >= 0) {
    $(".timer").text(time);
  }

  time--;
}, 1000);

$(".ans").click(function () {
  userclicked = 1;
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
    over();
  }
});

function maine() {
  useroption = 0;
  st = 1;
  time = 15;
  userclicked = 0;
  aq = new Audio("red.mp3");
  aq.play();
  q++;
  $("h1").text("QUESTION - " + q);

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
  }
}
function startagain() {
  q = 0;
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
  $("h1").text("GAME-OVER, " + username + " Score = " + (q - 1));
  if (userclicked == 0) {
    $(".timer").text("TIME OVER");
    $(".timer").addClass("widthse");
  }
  $("#s" + randomposition).addClass("right");

  $("#" + useroption).addClass("wrong");
  setTimeout(() => {
 
    if (!start) {
      $("h1").text("Press any key to Restart the Game");
    }
  }, 6000);

  startagain();
}

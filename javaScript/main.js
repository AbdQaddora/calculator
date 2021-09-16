let currentTheme = "one";
let cureentOp = null;
let a = 0,
  b = 0;
function themeChanger() {
  themeColorChanger();
  if (currentTheme == "one") {
    document.querySelector(".slider").style =
      "justify-content: center ; background-color: hsl(0, 5%, 81%)";
    currentTheme = "two";
  } else if (currentTheme == "two") {
    document.querySelector(".slider").style =
      "justify-content: flex-end; background-color:hsl(268, 71%, 12%)";
    currentTheme = "three";
  } else if (currentTheme == "three") {
    document.querySelector(".slider").style =
      "justify-content: flex-start; hsl(223, 31%, 20%);";
    currentTheme = "one";
  }
}

function themeColorChanger() {
  if (currentTheme == "one") {
    document.querySelector("body").style = "background-color: hsl(0, 0%, 90%)";
    document.querySelector(".head").style = "color:hsl(60, 10%, 19%)";
    document.querySelector(".secreen").style =
      "background-color: hsl(0, 0%, 93%);color:hsl(60, 10%, 19%)";
    document.querySelector(".buttonsContainer").style =
      "background-color:hsl(0, 5%, 81%)";
    document.querySelector(".del").style =
      "background-color: hsl(185, 42%, 37%) ; box-shadow: 0px 3px 0px 0px hsl(185, 58%, 25%);";
    document.querySelector(".numbers:nth-last-child(2)").style =
      "background-color: hsl(185, 42%, 37%) ; box-shadow: 0px 3px 0px 0px hsl(185, 58%, 25%);";
    document.querySelector(".numbers:nth-last-child(1)").style =
      "background-color:  hsl(25, 98%, 40%) ; box-shadow: 0px 3px 0px 0px hsl(25, 99%, 27%);";
  } else if (currentTheme == "two") {
    document.querySelector("body").style =
      "background-color: hsl(268, 75%, 9%)";
    document.querySelector(".indecatror").style =
      "background-color:hsl(176, 100%, 44%)";
    document.querySelector(".head").style = "color:hsl(52, 100%, 62%)";
    var x = document.querySelectorAll(".numbers");
    for (var y = 0; y < x.length; y++) {
      x[y].style =
        "color:hsl(52, 100%, 62%); background-color:hsl(268, 47%, 21%); box-shadow: 0px 3px 0px 0px hsl(290, 70%, 36%);";
    }
    document.querySelector(".secreen").style =
      "background-color: hsl(268, 71%, 12%);color:hsl(52, 100%, 62%)";
    document.querySelector(".buttonsContainer").style =
      "background-color:hsl(268, 71%, 12%)";
    document.querySelector(".del").style =
      "background-color: hsl(185, 42%, 37%) ; box-shadow: 0px 3px 0px 0px hsl(185, 58%, 25%);";
    document.querySelector(".numbers:nth-last-child(2)").style =
      "background-color: hsl(185, 42%, 37%) ; box-shadow: 0px 3px 0px 0px hsl(185, 58%, 25%);";
    document.querySelector(".numbers:nth-last-child(1)").style =
      "background-color:  hsl(25, 98%, 40%) ; box-shadow: 0px 3px 0px 0px hsl(25, 99%, 27%);";
  } else if (currentTheme == "three") {
    document.querySelector("body").style =
      "background-color:hsl(222, 26%, 31%)";
    document.querySelector(".indecatror").style =
      "background-color:hsl(6, 63%, 50%)";
    document.querySelector(".head").style = "color:white";
    var x = document.querySelectorAll(".numbers");
    for (var y = 0; y < x.length; y++) {
      x[y].style =
        "color:black; background-color:hsl(30, 25%, 89%); box-shadow: 0px 3px 0px 0px hsl(28, 16%, 65%);";
    }
    document.querySelector(".secreen").style =
      "background-color:  hsl(224, 36%, 15%);color: #FFF";
    document.querySelector(".buttonsContainer").style =
      "background-color:hsl(223, 31%, 20%)";
    document.querySelector(".del").style =
      "    background-color: hsl(225, 21%, 49%);" +
      "box-shadow: 0px 3px 0px 0px hsl(224, 28%, 35%);";
    document.querySelector(".numbers:nth-last-child(2)").style =
      "    background-color: hsl(225, 21%, 49%);" +
      "box-shadow: 0px 3px 0px 0px hsl(224, 28%, 35%);";
    document.querySelector(".numbers:nth-last-child(1)").style =
      "background-color:  hsl(6, 63%, 50%) ; box-shadow: 0px 3px 0px 0px hsl(6, 70%, 34%);";
  }
}

function clearScreen() {
  document.querySelector(".result").innerHTML = "";
}

function AddTOScreen(x) {
  var currentValue = document.querySelector(".result").innerHTML;
  currentValue += x;
  document.querySelector(".result").innerHTML = currentValue;
}

function del() {
  var currentValue = document.querySelector(".result").innerHTML;
  if (currentValue != null) {
    currentValue = currentValue.substr(0, currentValue.length - 1);
  }
  document.querySelector(".result").innerHTML = currentValue;
}

function equal() {
  var currentValue = document.querySelector(".result").innerHTML;
  currentValue = currentValue.replaceAll("x" , "*");
  currentValue = eval(currentValue);
  document.querySelector(".result").innerHTML = currentValue;
}

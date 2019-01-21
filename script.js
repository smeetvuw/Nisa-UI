// nav bar
function myFunction() {
  var x = document.getElementById("mynav1");
  if (x.className === "nav1") {
      x.className += " responsive";
  } else {
      x.className = "nav1";
  }
}

// Progress Bar code 
// =========================================================


// All order form div
// =====================================================
var subtype = document.getElementById("subtype");
var pickCut = document.getElementById("pickCut");
var sizecontent = document.getElementById("sizecontent");
var colourcontent = document.getElementById("colourcontent");
// var sizecontent = document.getElementById("sizecontent");

// Type of subscription

function monthly() {
  progressBar.Next();
  subtype.style.display = "none";
  pickCut.style.display = "block";
}

function bimonthly() {
  progressBar.Next();
  subtype.style.display = "none";
  pickCut.style.display = "block";
}

function quarterly(){
  progressBar.Next();
  subtype.style.display = "none";
  pickCut.style.display = "block";
}

// colour selection 

function blackbox() {
  // Get the checkbox
  var checkBox1 = document.getElementById("blackCheck");
  var black = document.getElementById("black");
  // If the checkbox is checked, display tick
  if (checkBox1.checked == true){
    black.style.backgroundColor = "#FBD8B6";
    progressBar.Next();
  } else {
    black.style.backgroundColor = "transparent";
    progressBar.Next();
  }
}

function navyKbox() {
  // Get the checkbox
  var checkBox2 = document.getElementById("navyKCheck");
  var navykhaki = document.getElementById("navykhaki");
  // If the checkbox is checked, display tick
  if (checkBox2.checked == true){
    navykhaki.style.backgroundColor = "#FBD8B6";
  } else {
    navykhaki.style.backgroundColor = "transparent";
  }
}

function navyMbox() {
  // Get the checkbox
  var checkBox3 = document.getElementById("navyMCheck");
  var navyM = document.getElementById("navyM");
  // If the checkbox is checked, display tick
  if (checkBox3.checked == true){
    navyM.style.backgroundColor = "#FBD8B6";
  } else {
    navyM.style.backgroundColor = "transparent";
  }
}

function greybox() {
  // Get the checkbox
  var checkBox4 = document.getElementById("greyCheck");
  var grey = document.getElementById("greydiv");
  // If the checkbox is checked, display tick
  if (checkBox4.checked == true){
    grey.style.backgroundColor = "#FBD8B6";
  } else {
    grey.style.backgroundColor = "transparent";
  }
}

function rosebox() {
  // Get the checkbox
  var checkBox5 = document.getElementById("roseCheck");
  var rose = document.getElementById("rose");
  // If the checkbox is checked, display tick
  if (checkBox5.checked == true){
    rose.style.backgroundColor = "#FBD8B6";
  } else {
    rose.style.backgroundColor = "transparent";
  }
}

function pomegranbox() {
  // Get the checkbox
  var checkBox6 = document.getElementById("pomegranCheck");
  var pomegran = document.getElementById("pomegran");
  // If the checkbox is checked, display tick
  if (checkBox6.checked == true){
    pomegran.style.backgroundColor = "#FBD8B6";
  } else {
    pomegran.style.backgroundColor = "transparent";
  }
}

var progressBar = {
  Bar: $('#progress-bar'),
  Reset: function () {
    if (this.Bar) {
      this.Bar.find('li').removeClass('active');
    }
  },
  Next: function () {
    $('#progress-bar li:not(.active):first').addClass('active');
  },
  Back: function () {
    $('#progress-bar li.active:last').removeClass('active');
  }
}

progressBar.Reset();


$("#Next").on('click', function () {
  progressBar.Next();
})
$("#Back").on('click', function () {
  progressBar.Back();
})
$("#Reset").on('click', function () {
  progressBar.Reset();
  subtype.style.display = "block";
  pickCut.style.display = "none";
})

// Cut Selection

function SABRINA(){
  progressBar.Next();
  pickCut.style.display = "none";
  sizecontent.style.display = "block";
}

function QUINN(){
  progressBar.Next();
  pickCut.style.display = "none";
  sizecontent.style.display = "block";
}

function ADA(){
  progressBar.Next();
  pickCut.style.display = "none";
  sizecontent.style.display = "block";
}

// Size selection

function small(){
  progressBar.Next();
  sizecontent.style.display = "none";
  colourcontent.style.display = "block";
}

function medium(){
  progressBar.Next();
  sizecontent.style.display = "none";
  colourcontent.style.display = "block";
}

function large(){
  progressBar.Next();
  sizecontent.style.display = "none";
  colourcontent.style.display = "block";
}

function xl(){
  progressBar.Next();
  sizecontent.style.display = "none";
  colourcontent.style.display = "block";
}

function xxl(){
  progressBar.Next();
  sizecontent.style.display = "none";
  colourcontent.style.display = "block";
}

$(".colourbtn").click(function(){
  $("#colourcontent").hide();
});

function oncut(){

}

function onsubtype(){

}

function onsize(){

}

function oncolour(){

}



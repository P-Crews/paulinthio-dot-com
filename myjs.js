$(function(){
  console.log("YUP");
});

var myApp = angular.module("myApp", []);
myApp.controller("mainController", function($scope, $window){
  $scope.init = function (){

  }
  $scope.name = "I'm here"
})
function whatido(event){
  console.log(event);
}

function crossTry(){
if($("#midct").hasClass("transition-x")){
  $("#topct, #midct, #lowct").fadeOut();
  $("#topct, #midct, #lowct").fadeIn();
  $("#midct").toggleClass("transition-x");
  $("#topct").toggleClass("transition-y");

  $(".open-bar").animate({width: '0%'}, 2000, function(){
    $(".open-bar").fadeOut();
  });
  $(".close-bar").animate({left : '-5%'}, 1500, function(){
    $(".close-bar").fadeOut();
  });
  $(".open-ul").animate({left : '-150%'}, 1500);

}else{
  $("#lowct").fadeOut();
  $("#midct").toggleClass("transition-x");
  $("#topct").toggleClass("transition-y")
  $(".open-bar").fadeIn();
  $(".open-bar").animate({width: '100%'}, 2000);

  $(".close-bar").animate({left : '90%'}, 1500, function(){
    $(".close-bar").fadeIn();
  });
  $(".open-ul").animate({left : '0%'}, 2500)
}
  console.log("pressed")
}


$(document).scroll(function() {
  var y = $(this).scrollTop();
  console.log(y)
  if (y > 150) {
    console.log("greater")
    $(".talent-logo").fadeIn();
    $(".site-hr").fadeIn();
    $(".talent-des").fadeIn();
  } else {
    console.log("lesser");
    $('.talent-logo').fadeOut();
    $(".talent-des").fadeOut();
    $(".site-hr").fadeOut();
  }
});
function moreSkills(val){
  $(".no-se").toggle();
  if(val == "View More"){
    $("#viewMore").attr("value", "View Less");
  }else{
    $("#viewMore").attr("value", "View More");
  }
}
function moreServices(val){
  $(".no-se-svc").toggle();
  if(val == "See All Services")
  {
    $("#seeServices").attr("value", "See Less Services")
  }else{
    $("#seeServices").attr("value", "See All Services")
  }
}

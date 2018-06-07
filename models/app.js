$( document ).ready(function() {
  init();
  
$("#tinyButton").click(function() {
  $(".tinyProject").toggle()
});

$("#miniButton").click(function() {
  $(".miniProject").toggle()
});

$("#showCaseHead").click(function() {
  $(".showCase").toggle()
});
  

});

function init(){
  $(".tinyProject").toggle();
  // $(".miniProject").toggle() 
}

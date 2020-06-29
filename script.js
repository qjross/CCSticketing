var n = 0

$(document).ready(function() {

$("#shsLink").mouseover(function(){
 $(this).css({"background-color": "#000000", color: "#996600"});
 });
    
 $("#shsLink").mouseout(function() {
  $(this).removeAttr("style");
}); 
$("#kmLink").mouseover(function(){
 $(this).css({"background-color": "#000000", color: "#EBE343"});
 });
    
    $("#kmLink").mouseout(function() {
  $(this).removeAttr("style");
}); 
   
$("#crestLink").mouseover(function(){
 $(this).css({"background-color": "#0C3726", color: "#EBE343"});
 });
    
    $("#crestLink").mouseout(function() {
  $(this).removeAttr("style");
}); 

$("#burnsLink").mouseover(function(){
 $(this).css({"background-color": "#06A6E0", color: "#EBE343"});
 });
    
    $("#burnsLink").mouseout(function() {
  $(this).removeAttr("style");
}); 
 
    });
var n = 0

$(document).ready(function() {

$("#shsLink").mouseenter(function(){
 $(this).css({"background-color": "#000000", color: "996600"});
 });
    
$("#kmLink").mouseenter(function(){
 $(this).css({"background-color": "#000000", color: "#EBE343"});
 });
    
   
$("#crestLink").mouseenter(function(){
 $(this).css({"background-color": "#0C3726", color: "#EBE343"});
 });

$("#burnsLink").mouseenter(function(){
 $(this).css({"background-color": "#06A6E0", color: "#EBE343"});
 });
    
    $("#burnsLink").mouseleave(function(){
 $(this).off;
 });
    
    
    });
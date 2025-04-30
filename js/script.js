// Light mode toggle stuff
var originalContent = $('#theme').html();
var newContent = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">   <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>';

$("#theme").click(function() {
    $('#nav').toggleClass('light-mode');
    $('#body').toggleClass('light-mode');

    if ($('#theme').html() === originalContent) {
        $('#theme').html(newContent);
    } else {
        $('#theme').html(originalContent);
    }
});

//move to parts of the page
$("#link-1").click(function(){
    $('html, body').animate({
       scrollTop: $("#personal").offset().top
    }, 1000);
 });

 $("#link-2").click(function(){
    $('html, body').animate({
       scrollTop: $("#education").offset().top
    }, 1000);
 });

 $("#link-3").click(function(){
    $('html, body').animate({
       scrollTop: $("#awards").offset().top
    }, 1000);
 });

 $("#link-4").click(function(){
    $('html, body').animate({
       scrollTop: $("#skills").offset().top
    }, 1000);
 });

 $("#link-5").click(function(){
    $('html, body').animate({
       scrollTop: $("#certifications").offset().top
    }, 1000);
 });

 $("#link-6").click(function(){
    $('html, body').animate({
       scrollTop: $("#extracurricular").offset().top
    }, 1000);
 });

 $("#link-7").click(function(){
    $('html, body').animate({
       scrollTop: $("#references").offset().top
    }, 1000);
 });

 $('#me').mouseover(function(){
    //moving the div left a bit is completely optional
    //but should have the effect of growing the image from the middle.
    $(this).stop().animate({"width": "450px","height":"450px"}, 400,'swing');
  }).mouseout(function(){ 
    $(this).stop().animate({"width": "350px","height":"350px"}, 200,'swing');
  });
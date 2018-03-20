
// variables

let unanswered = 0
 
 let wins = 0
 
 let losses = 0 





 // html values to DOM

$(".correct").html(wins);

$(".incorrect").html(losses);

$(".unanswered").html(unanswered);





// create a timer

    var timer;
    var timeLeft = 10;
$(".timer").text(timeLeft);

// timer start function

function startTimer() {
  timer = setInterval(function() {  
    $(".timer").text(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timer);
      $('.game').hide();
      $('.final').show();
    } else {
      timeLeft--;
    }
  }, 1000);
}


$("button").on("click", function() {
  clearInterval(timer);
  startTimer();
  $('.game').show();
  $('.boton').hide();
 
});


// funcion que al dar click muestre la respuesta si es correcta o no

let a = true 

if (a === true) {

$('#q1c, #q2b, #q3d, #q4a').click(function () {


wins++; 

 $(".correct").html(wins);

})
}




$('.Inc').click(function () {

losses++;
$(".incorrect").html(losses);

} )




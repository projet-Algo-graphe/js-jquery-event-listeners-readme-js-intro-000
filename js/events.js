//define functions here
function getIt(){
$('p').on('click', function(e){
  alert('Hey!');
})
}

function pressIt(){
  $('input').on('keydown', function(e){
    if(e.key === "G"){
      alert('You pressed the G key');
    }
  })
}

function submitIt(){
  $('input').on('submit', function(e){
      alert('your form is going to be submitted now');

  })
}

$(document).ready(function(){

// call functions here

});

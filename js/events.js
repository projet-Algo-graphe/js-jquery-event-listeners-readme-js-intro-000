//define functions here
function getIt(){
$('p').on('click', function(e){
  alert('Hey!');
})
}

function pressIt(){
  $('input').on('keydown', function(e){
    if(e === "G"){
      alert('You pressed the G key');
      return;
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
      return;

  });
}
function frameIt(){
  $( 'img' ).load(function() {
    $( this ).addClass( "bigImg" );
});
}

$(document).ready(function(){

// call functions here
getIt();
pressIt();
submitIt();
});

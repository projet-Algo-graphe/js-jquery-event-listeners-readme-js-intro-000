//define functions here
function getIt(){
$('p').on('click', function(e){
  alert('Hey!');
})
}

function frameIt(){
  $('imag').on('load', function(){
    $('imag').append("class = tasty");
  })
}

$(document).ready(function(){

// call functions here

});

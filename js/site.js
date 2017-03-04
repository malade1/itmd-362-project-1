// Tell jQuery to give up the dollar sign
$.noConflict();

jQuery(function($) {
 $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  
  // jQuery 3.x-style ready event and locally scoped $
  $('#email).on('keyup focus on blur', function() {
    var currentValue = $(this).val();
    var validPattern = $(this).attr('pattern');
    if(currentValue.match(validPattern)){
  $('#submit').addClass('active');
    } 
    else{
  $('#submit').removeClass('active');
    }
   });
  function clearForm() {
  $('#form')[0].reset();
 }
 
  $('#form').submit(function(event) {
  alert('Thank you! We will get back to you ASAP!');
  event.preventDefault();
  
  clearForm();
  });
});
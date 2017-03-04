//Tell jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  $('#email').on('keyup focus blur', function(){
    var currentValue = $(this).val();
    var vaildPattern = $(this).attr('pattern');
    if(currentValue.match(vaildPattern)){
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
    alert(Thank you! We will get back to you ASAP!');
    event.preventDefault();

    clearForm();
  });
});
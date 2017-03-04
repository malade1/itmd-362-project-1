$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  $('#email).on('keyup focus on blur', function(){
    var currentValue = $(this).val();
    var validPattern =$(this).attr('pattern');
    
    console.log(currentValue, validPattern);
    if(currentValue.match(validPattern)){
      $('#submit').addClass('active');
    } else{
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

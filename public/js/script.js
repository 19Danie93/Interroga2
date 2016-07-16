$(document).ready(function(){
  $('select#sel').on('change',function(){
    var valor = $(this).val();
    alert(valor);
    if(valor==2){
      $("input#p1").removeAttr('disabled');
      $("input#p2").removeAttr('disabled');
      $("input#p3").attr('disabled', 'disabled');
      $("input#p4").prop('disabled', true);
    }
    if(valor==4){
      $("input#p1").removeAttr('disabled');
      $("input#p2").removeAttr('disabled');
      $("input#p3").removeAttr('disabled');
      $("input#p4").removeAttr('disabled');
    }
  });
});

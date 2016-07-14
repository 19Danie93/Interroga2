$("#formValidate").validate({

  rules: {
    pass: {
      required: true,
      minlength: 5
    },
    cpassword: {
      required: true,
      minlength: 5,
      equalTo: "#pass"
    }
  },
  //For custom messages
/*  messages: {
      uname:{
          required: "Enter a username",
          minlength: "Enter at least 5 characters"
      },
      curl: "Enter your website",
  },*/
  errorElement : 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});

$("#formValidate2").validate({
  rules: {
    tema: {
      required: true
    }
  },
  errorElement : 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});

$("#formValidate3").validate({
  rules: {
    tema: {
      required: true
    }
  },
  errorElement : 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});

$("#formValidate4").validate({
  rules: {
    partida: {
      required: true
    },
    cant: {
      required: true
    }
  },
  errorElement : 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});


$.validate({
  errorMessagePosition: 'inline'
});

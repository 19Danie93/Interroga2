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
  }
  //For custom messages

});

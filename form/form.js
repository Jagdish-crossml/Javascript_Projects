<script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" 
        integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" 
        crossorigin="anonymous">
</script>
<script src="jquery-json-form-binding.min.js"></script>
</script>
$(document).ready(function(){

    var json = {
        name: "Waleed", 
        age: 23, 
        gender: "Male"
    };
  
    $("#myform").jsonToForm(json,
    {
      age: function(value){
        $('[name="age"]').val(value);
      }
    });
  
  });
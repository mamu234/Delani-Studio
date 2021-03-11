$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .design").toggle("slow");
  });
  $("#design").click(function() {
    $(".design, #design").toggle("slow");
  });
  $(".development").click(function() {
    $("#development, .development").toggle("slow");
  });
  $("#development").click(function() {
    $(".development, #development").toggle("slow");
  });
  $(".product-mgt").click(function() {
    $("#product-mgt, .product-mgt").toggle("slow");
  });
  $("#product-mgt").click(function() {
    $(".product-mgt, #product-mgt").toggle("slow");
  });
  
  


 $("form#form1").on('submit',function(event){
           event.preventDefault();
           var name = $("input#name").val();
           var email = $("input#email").val();
           var message = $("textarea#message").val();

           if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
               alert ("Hello " + name + ", Thank you for reaching out, we'll get back to you shortly...");
           }
           else if($("input#name").val() && $("input#email").val()){
               alert("Thank you for reaching ou to us. If you wish to leave a message please type in on the message section..");
           }
          else{
            alert("Please provide correct name or email")
          }
       });

      })
$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
  
  


const form = document.getElementById('mc-embedded-subscribe-form');
const formName = document.getElementById('mce-MMERGE6');
const formEmail= document.getElementById('mce-EMAIL');
const formMessage = document.getElementById('mce-MMERGE2');


form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log(formName.value + formEmail.value + formMessage.value);
    validateForm()
})


function validateForm(){
    if(formName.value === ""){ 
        alert("Please Enter Your Name");
    }else if(formEmail.value === ""){
        alert("Please Enter Your Email");
    }else if(formMessage.value === ""){
    alert("Please Enter Your Message");  
    }else{
        success();  
    }
}

function success(){
    alert("Thank you for contacting us " +(formName.value).toUpperCase() + " Your Message has been received" );
    clearFields();
}


function clearFields(){
    formName.value ='';
    formEmail.value ='';
    formMessage.value='';
};

  
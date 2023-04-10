$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                requierd:true,
                email:true,
                Number:true
            },
            password:{
                minlength:6
            },
            day:{
                requierd:true
            },
            gender:{
                requierd:true
            },
            messages:{
                fname:{
                requierd:"Enter first name",
                minlength:"Enter atleast 4 characters"
                }
            },
        }    
    })
})
function validate() {
    var form = document.getElementById("signup-form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        form.classlist.add("valid");
        form.classlist.remove("invalid");
        text.innerHTML = "Your Email Address in valid.";
        text.innerHTML = "Your Email Address in valid.";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classlist.remove("valid");
        form.classlist.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#00ff00";
    }

    if (email == "")
    {
        form.classlist.remove("valid");
        form.classlist.remove("invalid");
        text.innerHTML = "";
        text.innerHTML = "Your Email Address in valid.";
        text.style.color = "#00ff00";
    }
}
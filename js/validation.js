var stringRejex = /^[a-z A-Z]*$/
var mobileRegex = /^[0-9]{10}$/
var mobileRegex = /^[7689][0-9]{9}$/
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    function Submitdata(){
        var Username = document.querySelector('#Username').value
        var mobile = document.querySelector('#mobile').value
        var email = document.querySelector('#email').value

        // span
        var Username_error = document.querySelector('#Username_error')
        var mobile_error = document.querySelector('#mobile_error')
        var email_error = document.querySelector('#email_error')
    
        if(Username==""){
            Username_error.innerHTML --= "Enter the username"
        }else if(!stringRejex.test(Username)){
            Username_error.innerHTML = "Enter the specified charcter"
        }else if(username.length <3 || username.length >10){
            Username_error.innerHTML = "Enter the charcter must be between 3 to 15 "
        }else{
            Username_error.innerHTML = " "
        }

        if(mobile==""){
            mobile_error.innerHTML = "Enter the mobile number"
        }else if(!mobileRegex.test(mobile)){
            mobile_error.innerHTML = "Enter the valid number"
        }else{
            mobile_error.innerHTML = " "
        }

        if(email==""){
            email_error.innerHTML = "Enter the email"
        }else if(!emailRegex.test(email)){
            email_error.innerHTML = "Enter the valid Email"
        }else{
            email_error.innerHTML = " "
        }
    }
   

var existusername = "sahil"
var existpassword = 1234
var stringRegex = /^[A-Z a-z. ]*$/
// var passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
var passwordRegex = /^[0-8]{8}$/
function Submitdata(){

    var username = document.querySelector('#username').value
    var password = document.querySelector('#password').value

    // span
    var username_error = document.querySelector('#username_error')
    var password_error = document.querySelector('#password_error')


    if(username==""){
      username_error.innerHTML = "Enter the UserName"
    }else if(!stringRegex.test(username)){
      username_error.innerHTML = "Enter the Valid UserName"
    }else if(username.length <3 || username.length >10){
      username_error.innerHTML = "UserName must be between 3 to 10"
    }else{
      username_error.innerHTML = " "
    }

    if(password==""){
      password_error.innerHTML = "Enter The Password"
    }else if(!passwordRegex.test(password)){
      password_error.innerHTML = "Enter the specified password"
    }else {
      password_error.innerHTML = " "
    }
    // if(username==""){
    //   username_error.innerHTML = "Enter the username"
    // }else if(username==existusername && password==existpassword){
    //   username_error.innerHTML = "Login Sucessfully"
    // }else if(!stringRegex.test(username)){
    //   username_error.innerHTML = "Enter the Specified username"
    // }else if(username.length <3 || username.length >10){
    //   username_error.innerHTML = "charcter must be between 3 to 15"
    // }else{
    //   username_error.innerHTML = " " 
    // }

    // if(password==""){
    //   password_error.innerHTML = "Enter the Password"
    // }else if(!passwordRegex.test(password)){
    //   password_error.innerHTML = "Enter valid password"
    // }else{
    //   password_error.innerHTML = ""
    // }
} 
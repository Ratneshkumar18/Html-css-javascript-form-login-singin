// method-1


// function signup(event){
//     event.preventDefault()
//     let firstname = document.getElementById("firstname");
//     let lastname = document.getElementById("lastname");
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     console.log(firstname.value, lastname.value, email.value, password.value);
// }


// method-2

// function signup(event) {
//     event.preventDefault();
//     var form = document.forms.register;
//     let firstname = form.elements.firstname;
//     let lastname = form.elements.lastname;
//     let email = form.elements.email;
//     let password = form.elements.password;
//     console.log(firstname.value, lastname.value, email.value, password.value);

// }





// method-3


var modal = document.getElementById("modal");
var icon = document.getElementById("modal");
var user = {}
function signup(event){
    event.preventDefault();
    
    var form = document.forms.register;
    
    user.firstname = form.elements.firstname.value;
    user.lastname =  form.elements.lastname.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;

    if(firstname.value == "ratnesh"){
        firstname.style.border = "2px solid green"
    }
    else{
        firstname.style.border = "2px solid red"
    }
    console.log(user);
    modal.style.display = "flex"
   
}


function signin(event) {
    event.preventDefault();
    var form = document.forms.login;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value,
    

    console.log(user)
}
function closeModal(){
    // alert("hsj")
   
    icon.style.display = 'none';
    
   
}
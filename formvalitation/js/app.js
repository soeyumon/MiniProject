const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfpassword = document.getElementById("cfpassword");

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}
function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const small = formcontrol.querySelector("small");
    small.innerText = message;
}

//check valid eamil(using regular express)
function isvalidemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',function(e){
     // console.log("aa");

        // username
    if(username.value === ''){
       //error
       showerror(username,"Username is required")
    } else{
        //success
        showsuccess(username);
    }
        // email
    if(email.value === ''){
        showerror(email,"Email is required");
    } else if(!isvalidemail(email.value)){
        showerror(email,"Email is not valid");
    }
    else{
        showsuccess(email);
    }
        // password
    if(password.value === ''){
        showerror(password,"Password is required");
    }else{
        showsuccess(password);
    }
        // comfirm password
    if(cfpassword.value === ''){
        showerror(cfpassword,"Comfirm password is required");
    }else {
        if(password.value !== cfpassword.value){
            showerror(cfpassword,"Password do not match");
        } else {
            showsuccess(cfpassword);
        }
    }
    e.preventDefault();
});

// ADVANCE
// EVENT LISTENER

// form.addEventListener('submit',function(e){
//     console.log("aa");
//     e.preventDefault();
// });
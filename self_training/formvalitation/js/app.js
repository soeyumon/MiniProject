const form = document.querySelector("form");
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
    const smallmsg = formcontrol.querySelector('small');
    smallmsg.innerText = message;
}
function invalidemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',function(e){

    // username
    if(username.value === ''){
        showerror(username,"Username is required.");
    }else {
        showsuccess(username);
    }

    // email
    if(email.value === ''){
        showerror(email,"Email is required.");
    }else if(!invalidemail(email.value)){
        showerror(email,"Invaild Email");
    }else {
        showsuccess(email);
    }

    // password
    if(password.value === ''){
        showerror(password,"password is required.");
    }else {
        showsuccess(password);
    }
    
    // cfmpassword
    if(cfpassword.value === ''){
        showerror(cfpassword,"Comfirm password is required.");
    }else {
        if(password.value !== cfpassword.value){
            showerror(cfpassword,"Password do not match.");
        }else{
            showsuccess(cfpassword);
        }
    }
    e.preventDefault();
});
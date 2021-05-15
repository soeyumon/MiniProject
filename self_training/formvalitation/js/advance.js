const form = document.querySelector(".form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    cfmpassword = document.getElementById("cfpassword");

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
    function checkrequired(inputarr){
        inputarr.forEach(function(input){
            if(input.value === ''){
                showerror(input,`${getfield(input)} is required`);
            } else {
                showsuccess(input);
            }
        });
    }
    // Check input Length
    function checklength(input,min,max){
        if(input.value.length < min){
            showerror(input,`${getfield(input)} must be at least ${min} characters`);
        }else {
            showsuccess(input);
        }
    }
    function getfield(input){
        return input.id.charAt(0).toUpperCase() + input.name.slice(1);
    }
    function isinvalidemail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())){
            showsuccess(input);
        }else{
            showerror(input,"Email is not invalid");
        }
    }
    function matchpassword(input1,input2){
        if(input1.value !== input2.value){
            showerror(input2,"Password do not match.");
        }
    }
    form.addEventListener('submit',function(e){
        checkrequired([username,email,password,cfmpassword]);
        checklength(username,3,15);
        isinvalidemail(email);
        checklength(password,6,25);
        matchpassword(password,cfmpassword);
        e.preventDefault();
    });
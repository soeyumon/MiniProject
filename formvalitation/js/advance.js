const form = document.querySelector(".form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    cfmpassword = document.getElementById("cfpassword");

    // showsuccess
    function showsuccess(input){
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control success";
    }

    // showerror
    function showerror(input,message){
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control error";

        const small = formcontrol.querySelector("small");
        small.innerText = message;
    }

    // Check required fields
    function checkrequired(inputarr){
        inputarr.forEach(function(input){
            // console.log(input.value);
            if(input.value === ''){
                // showerror(input,"Something is required");
                showerror(input,`${getfieldName(input)} is required.`);
            } else {
                showsuccess(input);
            }
        });
    }
    // Get fieldName
    function getfieldName(input){
        // return input.id.toUpperCase();
        return input.name.charAt(0).toUpperCase() + input.id.slice(1);
    }
    // check vaild email (using regurlar express)
    function checkemail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())){
            showsuccess(input);
        }else {
            showerror(input,"Email is not valid");
        }
    }
    // Check Password Match
    function checkpasswordmatch(input1,input2){
        if(input1.value !== input2.value){
            showerror(input2,"Password do not match");
        }
    }

    // Check Input length
    function checklength(input,min,max){
        if(input.value.length < min){
            showerror(input,`${getfieldName(input)} must be at least ${min} characters`);
        }else if(input.value.length > max){
            showerror(input,`${getfieldName(input)} must be at least ${max} characters`);
        }else {
            showsuccess(input);
        }
    }
    // Event Listener
    form.addEventListener('submit',function(e){
        // console.log(username.value);

        checkrequired([username,email,password,cfmpassword]);
        checklength(username,3,15);
        checkemail(email);
        checklength(password,6,25);
        checkpasswordmatch(password,cfmpassword);
        e.preventDefault();
    });
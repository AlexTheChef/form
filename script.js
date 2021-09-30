function validation(event) {
    event.preventDefault()

    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("error-email");
    let name = document.getElementById("name").value;
    let errorName = document.getElementById("error-name");
    let lastName = document.getElementById("last-name").value;
    let errorLastName = document.getElementById("error-last-name");
    let pass = document.getElementById("pass").value;
    let errorPass = document.getElementById("error-pass");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    

    if (email.match(pattern)) { 
        errorEmail.innerHTML = ""
        document.getElementById("war5").style.display = "none"
    }
    else { 
        errorEmail.innerHTML = "Looks like this is not an email"  
        document.getElementById("war5").style.display = "block"
    }

    if (name == "") { 
        errorName.innerHTML = "Name cannot be empty"
        document.getElementById("name").style.border = " 2px solid #FF7979";
        document.getElementById("war").style.display = "block"
    }
    else { 
        errorName.innerHTML = ""  
        document.getElementById("name").style.border = "1px solid #DEDEDE";
        document.getElementById("war").style.display = "none"
    }

    if (lastName == "") { 
        errorLastName.innerHTML = "Last Name cannot be empty"
        document.getElementById("last-name").style.border = " 2px solid #FF7979";
        document.getElementById("war2").style.display = "block"
    }
    else { 
        errorLastName.innerHTML = ""  
        document.getElementById("last-name").style.border = "1px solid #DEDEDE";
        document.getElementById("war2").style.display = "none"
    }

    if (email == "") { 
        errorEmail.innerHTML = "Email cannot be empty"
        document.getElementById("email").style.border = " 2px solid #FF7979";
        document.getElementById("war3").style.display = "block"
    }
    else{
        document.getElementById("email").style.border = "1px solid #DEDEDE";
        document.getElementById("war3").style.display = "none"
    }

    if (pass == "") { 
        errorPass.innerHTML = "Password cannot be empty"
        document.getElementById("pass").style.border = " 2px solid #FF7979";
        document.getElementById("war4").style.display = "block"
    }
    else { 
        errorPass.innerHTML = ""  
        document.getElementById("pass").style.border = "1px solid #DEDEDE";
        document.getElementById("war4").style.display = "none"
    }





    return false
}
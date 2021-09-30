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

    if (name == "") {
        errorName.innerHTML = "Name cannot be empty"
        document.getElementById("name").style.border = " 2px solid #FF7979";
        document.getElementById("war").style.display = "block"
        let err = document.getElementById("name")
        err.classList.add("error-input")
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
        let err = document.getElementById("last-name")
        err.classList.add("error-input")
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
        let err = document.getElementById("email")
        err.classList.add("error-input")
    }
    else {
        if (email.match(pattern)) {
            errorEmail.innerHTML = ""
            document.getElementById("war3").style.display = "none"
            document.getElementById("email").style.border = "1px solid #DEDEDE";
        }
        else {
            errorEmail.innerHTML = "Looks like this is not an email"
            document.getElementById("war3").style.display = "block"
            document.getElementById("email").style.border = "2px solid #FF7979";
            let text = document.getElementById("email")
            text.classList.add("error-input-text")
        }
    }

    if (pass == "") {
        errorPass.innerHTML = "Password cannot be empty"
        document.getElementById("pass").style.border = " 2px solid #FF7979";
        document.getElementById("war4").style.display = "block"
        let err = document.getElementById("pass")
        err.classList.add("error-input")
    }
    else {
        errorPass.innerHTML = ""
        document.getElementById("pass").style.border = "1px solid #DEDEDE";
        document.getElementById("war4").style.display = "none"
    }





    return false
}
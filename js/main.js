const email = document.getElementById("email")
const pass = document.getElementById("password")
const btn = document.getElementById("btnSubmit")
const parrafo = document.getElementById("warnings")

btn.addEventListener("click", function(event){
    event.preventDefault()

    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    //Comprobar email
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es válido <br>'
        email.classList.add("errorField")
        entrar = true
    }
    if(email.value == "") {
        email.classList.add("errorField")
    }

    //comprobar contraseña
    if(pass.value.length < 8){
        warnings += `La contraseña no es válida`
        entrar = true
    }
    if(password.value == "") {
        password.classList.add("errorField")
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})

email.addEventListener("keyup", function(){
    email.classList.remove("errorField")
})
email.addEventListener("keyup", function(){
    password.classList.remove("errorField")
})
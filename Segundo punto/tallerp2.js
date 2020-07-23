const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

//quita las acciones por defecto
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
//validacion input nombre (dos nombres)
    let regexNombre = (/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)
    parrafo.innerHTML = ""
    if(!regexNombre.test(nombre.value)){
    warnings += `El nombre no es valido (debe poner sus dos nombres) <br>`
    entrar = true
}
    
//validacion email @ y "." usando una expresión regular
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
//validacion password expresion regular
    let regexPassword = (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,20}/)
    parrafo.innerHTML = ""
    if(!regexPassword.test(password.value)){
        warnings += `El password no es valido (debe tener al menos una letra, un número y un caracter especial) <br>`
        entrar = true
    }
//para imprimir las alertas en el documento 
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Enviado"
    }
})
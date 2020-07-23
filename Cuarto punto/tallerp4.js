function capturar() {
    function Persona(name,email,dir,age,ocupacion,tel) {
        this.name=name
        this.email=email
        this.dir=dir
        this.age=age
        this.ocupacion=ocupacion
        this.tel=tel  
    }
//declarar variables y values de los inputs
    var nameCap=document.getElementById("name")
    var emailCap=document.getElementById("email")    
    var dirCap=document.getElementById("dir")
    var ageCap=document.getElementById("age")
    var ocupacionCap=document.getElementById("ocupacion")
    var telCap=document.getElementById("tel")

    var newUser= new Persona(nameCap,emailCap,dirCap,ageCap,ocupacionCap,telCap)
    console.log(newUser)
}
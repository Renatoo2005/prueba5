class Persona{
    constructor(nombre,edad) {
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        document.getElementById("saludo").innerHTML=`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}
class Alumno extends Persona {
    constructor(nombre, edad,) {
        super (nombre,edad)
        this.notas=[];
    }
    agregarnota(nota){
        this.notas.push(nota);
    }
    calcularPromedio(){
        if (this.notas.length===0) {
            return 0;
        }
        const total =this.notas.reduce((acc,nota)=> acc+nota,0);
        return total/this.notas.length; 
    }
    mostrarnotas(){
        document.getElementById("notas").innerHTML=`Notas de ${this.nombre} son: ${this.notas.join(', ')}`;
    }
}
const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const mostrar = document.getElementById("presentar")
mostrar.addEventListener("click",()=>{
    const nom = nombre.value;
    const eda = parseInt(edad.value);
    const estudiante = new Alumno (nom,eda)
    estudiante.saludar();
})



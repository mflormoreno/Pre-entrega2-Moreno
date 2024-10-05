// Algoritmo con condicional
// Test de nivelación para usuarios
let contraseña = parseInt(prompt("Tu clave de acceso es un número que aumentado en 2 da 10 como resultado:"))
let accesoAutorizado = false;

if (contraseña === 8) {
    alert ("Acceso autorizado. ¡A continuación podrás realizar tu test de nivelación!")
    accesoAutorizado = true;
} else {
    alert ("Acceso denegado"); 
}

// Ciclo for - solo continua si el acceso es autorizado
// Cuentas matemáticas simples para practicar
if (accesoAutorizado) {
    let usuario = parseInt(prompt("Ingresá tu nombre. ¡Vamos a practicar!"));
    let respuestasCorrectas = 0;

    for (let i = 0; i < 5; i++) {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        let respuesta = prompt(`¿Cuánto es ${num1}*${num2}?`);
        if (parseInt(respuesta) === num1 * num2) {
            respuestasCorrectas++;
        }
    }

// calificación solo se ejecuta si el acceso es autorizado
    let calificacion = respuestasCorrectas;
    alert(`Tu cantidad de respuestas correctas es: ${calificacion}`);

    if ((calificacion>=4) && (calificacion<=5)) {
        alert("¡Felicidades! Tu nivel es: ÓPTIMO")
    } else if (calificacion == 3) {
        alert("¡Estás aprobado/a! Felicidades")
    } else if (calificacion == 2){
        alert("¡Tu calificación es: REGULAR. ¡A seguir practicando! Te recomendamos nuestras clases online para reforzar los saberes.")
    } else if(calificacion <=1){
        alert("Necesitas más practica. Te recomendamos nuestras clases online para reforzar los saberes.")
    } else {
        alert("Número invalido")
    }
}



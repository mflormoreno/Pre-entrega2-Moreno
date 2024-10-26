// Array de objetos con los cursos (nombre, nivel, descripción y precio)
const cursos = [
    { nombre: "Matemáticas Básicas", nivel: "bajo", descripcion: "Curso ideal para fortalecer conceptos fundamentales.", precio: 5000 },
    { nombre: "Fundamentos de Matemáticas", nivel: "medio", descripcion: "Curso para afianzar la base y progresar.", precio: 6000 },
    { nombre: "Matemáticas Intermedias", nivel: "medio-alto", descripcion: "Curso para reforzar conocimientos intermedios.", precio: 8000 },
    { nombre: "Matemáticas Avanzadas", nivel: "alto", descripcion: "Curso avanzado para seguir progresando.", precio: 10000 }
];

// Array para el carrito de compras
let carrito = [];

// Función para agregar un curso al carrito
function agregarAlCarrito(curso) {
    carrito.push(curso);
    alert(`${curso.nombre} ha sido agregado al carrito. Precio: $${curso.precio}`);
}

// Función para recomendar un curso basado en las respuestas correctas
function recomendarCurso(respuestasCorrectas) {
    let cursoRecomendado;

    if (respuestasCorrectas >= 4) {
        cursoRecomendado = cursos.find(curso => curso.nivel === "alto");
    } else if (respuestasCorrectas === 3) {
        cursoRecomendado = cursos.find(curso => curso.nivel === "medio-alto");
    } else if (respuestasCorrectas === 2) {
        cursoRecomendado = cursos.find(curso => curso.nivel === "medio");
    } else {
        cursoRecomendado = cursos.find(curso => curso.nivel === "bajo");
    }

    alert(`Te recomendamos el curso: ${cursoRecomendado.nombre}\n${cursoRecomendado.descripcion}\nPrecio: $${cursoRecomendado.precio}`);
    
    // Preguntar al usuario si desea agregar el curso al carrito
    let deseaAgregar = confirm("¿Deseas agregar este curso al carrito?");
    if (deseaAgregar) {
        agregarAlCarrito(cursoRecomendado);
    } else {
        alert("No se ha agregado el curso al carrito.");
    }
}

// Solicita la clave de acceso al usuario
let contraseña = parseInt(prompt("Tu clave de acceso es un número que aumentado en 2 da 10 como resultado:"));
let accesoAutorizado = false;

if (contraseña === 8) {
    alert("Acceso autorizado. ¡A continuación podrás realizar tu test de nivelación!");
    accesoAutorizado = true;
} else {
    alert("Acceso denegado");
}

// Si la clave es correcta, el usuario podrá realizar el test de nivelación
if (accesoAutorizado) {
    let usuario;
    do {
        usuario = prompt("Ingresá tu nombre. ¡Vamos a practicar!");
    } while (!usuario || /\d|\W/.test(usuario)); // Repite si el nombre está vacío o contiene números/caracteres especiales

    let respuestasCorrectas = 0;

    // Genera 5 preguntas de multiplicación aleatorias
    for (let i = 0; i < 5; i++) {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        let respuesta = prompt(`¿Cuánto es ${num1} * ${num2}?`);
        
        if (parseInt(respuesta) === num1 * num2) {
            respuestasCorrectas++;
        }
    }

    // Muestra al usuario la cantidad de respuestas correctas
    alert(`Tu cantidad de respuestas correctas es: ${respuestasCorrectas}`);

    // Recomendar un curso basado en las respuestas correctas
    recomendarCurso(respuestasCorrectas);
}

// Mostrar el contenido del carrito en la consola
console.log("Contenido del carrito:", carrito);
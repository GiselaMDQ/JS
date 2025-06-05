

// VERSION PARA 10 ALUMNOS

// let nota = 0;
// let promedio = 0;
// let i = 1;

// while(i<=10) {
//     nota = nota + parseInt(prompt ("Ingresa la nota del alumno " + i));
//     console.log ("la suma actual es: " + nota);
//     i++;
// }

// promedio = nota / i;
// console.log ("El promedio es: " + promedio);

//VERSION EN LA QUE EL USUARIO INGRESA CANTIDAD DE ESTUDIANTES

// let cantAlumnos = 0;
// let nota = 0;
// let promedio = 0;
// let i = 1;

// cantAlumnos = parseInt (prompt ("Cuantos alumnos rindieron hoy?"))

// while(i<=cantAlumnos) {
//     nota = nota + parseInt(prompt ("Ingresa la nota del alumno " + i));
//     console.log ("la suma actual es: " + nota);
//     i++;
// }

// promedio = nota / i;
// console.log ("El promedio es: " + promedio);


// VERSION DONDE EL USUARIO INGRESA CANTIDAD DE ESTUDIANTES Y DICE SI APROBARON O NO

// let cantAlumnos = 0;
// let nota = 0;
// let promedio = 0;
// let i, notaAlumno;

// cantAlumnos = parseInt (prompt ("Cuantos alumnos rindieron hoy?"))

// for (i=1; i<=cantAlumnos; i++) {
//     notaAlumno = parseInt(prompt ("Ingresa la nota del alumno " + i));
//     if (notaAlumno >= 4) 
//         console.log ("El alumno aprobó con " + notaAlumno);
//     else
//         console.log ("El alumno desaprobo");
//     nota = nota + notaAlumno;
//     console.log ("la suma actual es: " + nota);

// }

// promedio = nota / i;
// console.log ("El promedio es: " + promedio);


//VERSIOIN CON FUNCIONES

// let alumnos = parseInt (prompt ("Cuantos alumnos rindieron hoy?"));

// function aprobado (nota) {
//     if (nota >= 4)
//          return true;
//      else
//          return false;
// }

// function aprobadoFlecha (nota) {
//     const esMayorQueCuatro = nota => nota > 4;
// }

// function promedio (cantidadAlumnos) {

//     let nota = 0;
//     let promedio = 0;
//     let notaAlumno = 0;
//     let i = 1;

//     for (i; i<=cantidadAlumnos; i++) {
//         notaAlumno = parseInt(prompt ("Ingresa la nota del alumno " + i));
//         if (aprobadoFlecha (notaAlumno))
//             console.log("Aprobado")
//         else
//             console.log ("Desaprobado")
//         nota = nota + notaAlumno;
//         console.log ("la suma actual es: " + nota);
//     }
//     promedio = nota/(i-1);
//     return promedio;
// }

// console.log ("El promedio es:" + promedio(alumnos))

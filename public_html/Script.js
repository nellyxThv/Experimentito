function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let edad = parseInt(
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    let mensaje = "";

    if (promedio >= 9) {

        mensaje = "EXCELENTE";

    } else if (promedio >= 8) {

        mensaje = "MUY BIEN";

    } else if (promedio >= 7) {

        mensaje = "BIEN";

    } else if (promedio >= 6.5) {

        mensaje = "PIENSA EN CONTA";

    } else if (promedio >= 6) {

        mensaje = "DATE DE BAJA";

    } else {

        mensaje = "VETE A LA 11";
    }


    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + mensaje;
}


function limpiar() {

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";

    document.getElementById("resultado").innerHTML = "";
}


function agregarAlumno() {

    let nombre = document.getElementById("nombre").value;

    let edad = parseInt(
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Obtener mensaje

    let mensaje = "";

    if (promedio >= 9) {

        mensaje = "EXCELENTE";

    } else if (promedio >= 8) {

        mensaje = "MUY BIEN";

    } else if (promedio >= 7) {

        mensaje = "BIEN";

    } else if (promedio >= 6.5) {

        mensaje = "PIENSA EN CONTA";

    } else if (promedio >= 6) {

        mensaje = "DATE DE BAJA";

    } else {

        mensaje = "VETE A LA 11";
    }


    // Agregar alumno a la lista

    document.getElementById("alumnos").innerHTML +=
        "<p>" +
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><strong>Resultado:</strong> " + mensaje +
        "</p>";
}




function calcularResultado() {

    let carreras = {
        animacion: 0,
        semiconductores: 0,
        ciberseguridad: 0,
        videojuegos: 0,
        telecomunicaciones: 0,
        ia: 0,
        forense: 0,
        renovables: 0,
        redes: 0,
        mecatronica: 0,
        manufactura: 0,
        medicos: 0,
        industrial: 0,
        multimedia: 0,
        sonido: 0,
        software: 0,
        datos: 0,
        seguridad: 0
    };

    
    for (let i = 1; i <= 5; i++) {
        let respuesta = document.querySelector(
            'input[name="pregunta' + i + '"]:checked'
        );

        if (!respuesta) {
            alert("¡Responde todas las preguntas primero!");
            return;
        }
    }

    // Pregunta 1
    if (document.getElementById("p1a").checked) carreras.animacion++;
    else if (document.getElementById("p1b").checked) carreras.semiconductores++;
    else if (document.getElementById("p1c").checked) carreras.ciberseguridad++;
    else if (document.getElementById("p1d").checked) carreras.videojuegos++;

    // Pregunta 2
    if (document.getElementById("p2a").checked) carreras.telecomunicaciones++;
    else if (document.getElementById("p2b").checked) carreras.ia++;
    else if (document.getElementById("p2c").checked) carreras.forense++;
    else if (document.getElementById("p2d").checked) carreras.renovables++;

    // Pregunta 3
    if (document.getElementById("p3a").checked) carreras.redes++;
    else if (document.getElementById("p3b").checked) carreras.mecatronica++;
    else if (document.getElementById("p3c").checked) carreras.manufactura++;
    else if (document.getElementById("p3d").checked) carreras.medicos++;

    // Pregunta 4
    if (document.getElementById("p4a").checked) carreras.industrial++;
    else if (document.getElementById("p4b").checked) carreras.multimedia++;
    else if (document.getElementById("p4c").checked) carreras.sonido++;
    else if (document.getElementById("p4d").checked) carreras.software++;

    // Pregunta 5
    if (document.getElementById("p5a").checked) carreras.datos++;
    else if (document.getElementById("p5b").checked) carreras.seguridad++;
    else if (document.getElementById("p5c").checked) carreras.ia++;
    else if (document.getElementById("p5d").checked) carreras.software++;

    // Buscar la carrera ganadora
    let max = 0;
    let ganadora = "";

    for (let carrera in carreras) {
        if (carreras[carrera] > max) {
            max = carreras[carrera];
            ganadora = carrera;
        }
    }

    let nombres = {
        animacion: "ANIMACIÓN DIGITAL",
        semiconductores: "SEMICONDUCTORES Y MICROELECTRÓNICA",
        ciberseguridad: "TECNÓLOGO EN CIBERSEGURIDAD",
        videojuegos: "SIMULACIONES INTERACTIVAS Y VIDEOJUEGOS",
        telecomunicaciones: "TELECOMUNICACIONES",
        ia: "INTELIGENCIA ARTIFICIAL",
        forense: "INFORMÁTICA FORENSE",
        renovables: "ENERGÍAS RENOVABLES",
        redes: "REDES DE INFORMACIÓN",
        mecatronica: "MECATRÓNICA",
        manufactura: "MANUFACTURA AUTOMATIZADA",
        medicos: "MANUFACTURA DE DISPOSITIVOS MÉDICOS",
        industrial: "DISEÑO INDUSTRIAL",
        multimedia: "MULTIMEDIA",
        sonido: "SONIDO",
        software: "DESARROLLO DE SOFTWARE",
        datos: "ANALÍTICA Y CIENCIA DE LOS DATOS",
        seguridad: "SEGURIDAD INFORMÁTICA"
    };

    // Mostrar resultado
    document.getElementById("resultado").textContent =
        "Tu carrera ideal es: " + nombres[ganadora];

    let porcentaje = (max / 5) * 100;

    document.getElementById("afinidad").value = porcentaje;
    document.getElementById("porcentaje").textContent = porcentaje + "%";

    document.getElementById("progreso").value = 100;
}

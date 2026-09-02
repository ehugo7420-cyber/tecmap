document.addEventListener("DOMContentLoaded", () => {

    const lugares = document.querySelectorAll(".lugar");
    const informacion = document.getElementById("informacion");

    const buscador = document.getElementById("buscador");
    const botonBuscar = document.getElementById("botonBuscar");
    const botonLimpiar = document.getElementById("botonLimpiar");


    // ==========================================
    // INFORMACIÓN DE LOS LUGARES
    // ==========================================

    const datosLugares = {

        "edificio-a": {
            nombre: "Edificio A",
            tipo: "Edificio académico",
            descripcion: "Edificio destinado a aulas y espacios académicos.",
            horario: "7:00 AM - 8:00 PM"
        },

        "laboratorio": {
            nombre: "Laboratorio de Cómputo",
            tipo: "Laboratorio",
            descripcion: "Espacio destinado a prácticas de programación y actividades académicas.",
            horario: "7:00 AM - 8:00 PM"
        },

        "biblioteca": {
            nombre: "Biblioteca",
            tipo: "Servicio académico",
            descripcion: "Espacio destinado a consulta, lectura, investigación y estudio.",
            horario: "8:00 AM - 7:00 PM"
        },

        "banos": {
            nombre: "Baños",
            tipo: "Servicio",
            descripcion: "Área destinada a los servicios sanitarios del tecnológico.",
            horario: "7:00 AM - 8:00 PM"
        },

        "edificio-b": {
            nombre: "Edificio B",
            tipo: "Edificio académico",
            descripcion: "Edificio destinado a actividades académicas y aulas.",
            horario: "7:00 AM - 8:00 PM"
        }

    };


    // ==========================================
    // OBTENER LOS DATOS DEL LUGAR
    // ==========================================

    function obtenerDatos(lugar) {

        let claseLugar = "";

        if (lugar.classList.contains("edificio-a")) {
            claseLugar = "edificio-a";
        }

        else if (lugar.classList.contains("laboratorio")) {
            claseLugar = "laboratorio";
        }

        else if (lugar.classList.contains("biblioteca")) {
            claseLugar = "biblioteca";
        }

        else if (lugar.classList.contains("banos")) {
            claseLugar = "banos";
        }

        else if (lugar.classList.contains("edificio-b")) {
            claseLugar = "edificio-b";
        }

        return datosLugares[claseLugar];
    }


    // ==========================================
    // MOSTRAR INFORMACIÓN
    // ==========================================

    function mostrarInformacion(lugar) {

        const datos = obtenerDatos(lugar);

        if (!datos) {
            return;
        }

        informacion.innerHTML = `
            <h3>${datos.nombre}</h3>

            <p>
                <strong>Tipo:</strong>
                ${datos.tipo}
            </p>

            <p>
                <strong>Descripción:</strong>
                ${datos.descripcion}
            </p>

            <p>
                <strong>Horario:</strong>
                ${datos.horario}
            </p>
        `;
    }


    // ==========================================
    // QUITAR SELECCIÓN
    // ==========================================

    function quitarSeleccion() {

        lugares.forEach(lugar => {

            lugar.classList.remove("seleccionado");

        });

    }


    // ==========================================
    // SELECCIONAR LUGAR
    // ==========================================

    function seleccionarLugar(lugar) {

        quitarSeleccion();

        lugar.classList.add("seleccionado");

        mostrarInformacion(lugar);

    }


    // ==========================================
    // CLIC EN LOS LUGARES
    // ==========================================

    lugares.forEach(lugar => {

        lugar.addEventListener("click", () => {

            seleccionarLugar(lugar);

        });

    });


    // ==========================================
    // BUSCAR LUGAR
    // ==========================================

    function buscarLugar() {

        const texto = buscador.value.trim().toLowerCase();


        if (texto === "") {

            quitarSeleccion();

            informacion.innerHTML = `
                <h3>Escribe un lugar</h3>

                <p>
                    Ingresa el nombre de un lugar en el buscador.
                </p>
            `;

            return;
        }


        let lugarEncontrado = null;


        lugares.forEach(lugar => {

            const nombreLugar = lugar.innerText.toLowerCase();


            if (nombreLugar.includes(texto)) {

                lugarEncontrado = lugar;

            }

        });


        if (lugarEncontrado) {

            seleccionarLugar(lugarEncontrado);

        }

        else {

            quitarSeleccion();

            informacion.innerHTML = `
                <h3>Lugar no encontrado</h3>

                <p>
                    No se encontró ningún espacio con el nombre
                    "<strong>${texto}</strong>".
                </p>
            `;

        }

    }


    // ==========================================
    // BOTÓN BUSCAR
    // ==========================================

    botonBuscar.addEventListener("click", buscarLugar);


    // ==========================================
    // BUSCAR CON ENTER
    // ==========================================

    buscador.addEventListener("keypress", (evento) => {

        if (evento.key === "Enter") {

            buscarLugar();

        }

    });


    // ==========================================
    // BOTÓN LIMPIAR
    // ==========================================

    botonLimpiar.addEventListener("click", () => {

        buscador.value = "";

        quitarSeleccion();

        informacion.innerHTML = `
            <h3>Selecciona un lugar</h3>

            <p>
                Haz clic en un espacio del mapa o utiliza el buscador.
            </p>
        `;

    });

});
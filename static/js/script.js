document.addEventListener("DOMContentLoaded", () => {

    const lugares = document.querySelectorAll(".lugar");
    const informacion = document.getElementById("informacion");

    lugares.forEach(lugar => {

        lugar.addEventListener("click", () => {

            let nombre = "";
            let tipo = "";
            let descripcion = "";

            if (lugar.classList.contains("edificio-a")) {
                nombre = "Edificio A";
                tipo = "Edificio";
                descripcion = "Edificio destinado a aulas y espacios académicos.";
            }

            else if (lugar.classList.contains("laboratorio")) {
                nombre = "Laboratorio de Cómputo";
                tipo = "Laboratorio";
                descripcion = "Espacio destinado a prácticas y actividades de programación.";
            }

            else if (lugar.classList.contains("biblioteca")) {
                nombre = "Biblioteca";
                tipo = "Servicio";
                descripcion = "Espacio para consulta, lectura y estudio.";
            }

            else if (lugar.classList.contains("banos")) {
                nombre = "Baños";
                tipo = "Servicio";
                descripcion = "Área de servicios sanitarios.";
            }

            else if (lugar.classList.contains("edificio-b")) {
                nombre = "Edificio B";
                tipo = "Edificio";
                descripcion = "Edificio destinado a actividades académicas.";
            }

            informacion.innerHTML = `
                <h3>${nombre}</h3>
                <p><strong>Tipo:</strong> ${tipo}</p>
                <p>${descripcion}</p>
            `;

        });

    });

});
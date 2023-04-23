document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nivelInglesSeleccionado = document.querySelector("input[name='nivIngles']:checked");

    const data = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        fnac: document.getElementById("fnac").value,
        ocupacion: document.getElementById("ocupacion").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("e-m").value,
        nacionalidad: document.getElementById("nacionalidad").value,
        nivIngles: nivelInglesSeleccionado ? nivelInglesSeleccionado.value : "No seleccionado",
        lenguajes: Array.from(document.getElementById("lenguajes").options)
            .filter(option => option.selected)
            .map(option => option.value)
            .join(', '),
        aptitudes: document.getElementById("aptitudes").value,
        habilidades: Array.from(document.querySelectorAll("input[name='habilidades']:checked"))
            .map(checkbox => checkbox.value)
            .join(', '),
        perfil: document.getElementById("perfil").value
    };

    sessionStorage.setItem("formData", JSON.stringify(data));
    window.location.href = "resultado.html";
});

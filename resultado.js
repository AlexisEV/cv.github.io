document.addEventListener("DOMContentLoaded", function() {
    const data = JSON.parse(sessionStorage.getItem("formData"));

    const resultados = document.getElementById("resultados");
    resultados.innerHTML = `
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Apellidos:</strong> ${data.apellidos}</p>
        <p><strong>Fecha de nacimiento:</strong> ${data.fnac}</p>
        <p><strong>Ocupación:</strong> ${data.ocupacion}</p>
        <p><strong>Teléfono:</strong> ${data.tel}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Nacionalidad:</strong> ${data.nacionalidad}</p>
        <p><strong>Nivel de inglés:</strong> ${data.nivIngles}</p>
        <p><strong>Lenguajes de programación:</strong> ${data.lenguajes}</p>
        <p><strong>Aptitudes:</strong> ${data.aptitudes}</p>
        <p><strong>Habilidades:</strong> ${data.habilidades}</p>
        <p><strong>Perfil:</strong> ${data.perfil}</p>
    `;
});

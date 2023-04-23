function procesarFormulario(event) {
    event.preventDefault();
    
    const formulario = document.forms[0];
    const data = new FormData(formulario);

    localStorage.setItem("formData", JSON.stringify(Object.fromEntries(data.entries())));

    window.location.href = "resultado.html";
}

document.querySelector("form").addEventListener("submit", procesarFormulario);

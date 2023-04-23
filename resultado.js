function mostrarResultado() {
    const data = JSON.parse(localStorage.getItem("formData"));
    const resultadoDiv = document.getElementById("resultado");

    for (const [key, value] of Object.entries(data)) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        resultadoDiv.appendChild(p);
    }
}

mostrarResultado();

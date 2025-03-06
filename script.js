function copiarTexto(icon, texto) {
    navigator.clipboard.writeText(texto);
    
    // Mostra o popover
    let popover = icon.nextElementSibling;
    popover.classList.add("show-popover");

    // Esconde após 2 segundos
    setTimeout(() => {
        popover.classList.remove("show-popover");
    }, 2000);
}

// Validação de e-mail com Regex
function validarEmail(input) {
    let email = input.value.trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorDiv = document.getElementById("emailError");

    if (email !== "" && !regex.test(email)) {
        errorDiv.textContent = "E-mail inválido!";
        input.style.borderBottom = "2px solid red";
    } else {
        errorDiv.textContent = "";
        input.style.borderBottom = "2px solid #007bff";
    }
}

// Adicionar novo e-mail na tabela ao pressionar Enter
function adicionarEmail(event) {
    if (event.key === "Enter") {
        let input = event.target;
        let email = input.value.trim();
        if (email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            let table = document.getElementById("emailTable").querySelector("tbody");
            let newRow = `<tr><td>${email}</td>
                <td class="text-center position-relative">
                    <i class="bi bi-clipboard copy-icon" onclick="copiarTexto(this, '${email}')"></i>
                    <span class="popover-copied">Copiado</span>
                </td></tr>`;
            table.innerHTML += newRow;
            input.value = "";
        }
    }
}

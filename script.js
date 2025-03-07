function copiarTexto(icon, texto) {
    navigator.clipboard.writeText(texto);
    
    // Mostra o popover "Copiado"
    let popover = icon.nextElementSibling;
    popover.classList.add("show-popover");

    // Esconde após 2 segundos
    setTimeout(() => {
        popover.classList.remove("show-popover");
    }, 2000);
}

// Exibe uma mensagem de boas-vindas quando o site é carregado
window.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao meu portfólio!");
});

// Animação suave nos links do menu ao passar o mouse
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.3s";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

// Alerta no envio do formulário (se existir no DOM)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
}

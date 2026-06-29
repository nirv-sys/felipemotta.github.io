const themeButton = document.querySelector(".btn-tema");
const savedTheme = localStorage.getItem("theme");

// Mantém o tema escolhido pelo visitante durante a navegação entre páginas.
if (savedTheme === "light") {
  document.body.classList.remove("dark");
}

function updateThemeButton() {
  if (!themeButton) {
    return;
  }

  themeButton.textContent = document.body.classList.contains("dark") ? "Claro" : "Escuro";
}

updateThemeButton();

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateThemeButton();
  });
}

const copyButton = document.querySelector(".btn-copiar");

if (copyButton) {
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText("admxdurangokid@hotmail.com").then(() => {
      copyButton.textContent = "Copiado!";

      setTimeout(() => {
        copyButton.textContent = "Copiar";
      }, 2000);
    });
  });
}

const contactForm = document.querySelector("#contact-form");

// Valida o formulário de contato e simula o envio exigido pela atividade.
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const status = document.querySelector("#form-status");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    document.querySelector("#name-error").textContent = "";
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#message-error").textContent = "";
    status.style.display = "none";
    status.textContent = "";

    if (!name.value.trim()) {
      document.querySelector("#name-error").textContent = "O nome é obrigatório.";
      isValid = false;
    }

    if (!email.value.trim()) {
      document.querySelector("#email-error").textContent = "O e-mail é obrigatório.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      document.querySelector("#email-error").textContent = "Insira um formato de e-mail válido.";
      isValid = false;
    }

    if (!message.value.trim()) {
      document.querySelector("#message-error").textContent = "A mensagem é obrigatória.";
      isValid = false;
    }

    if (isValid) {
      contactForm.reset();
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.display = "block";
    }
  });
}

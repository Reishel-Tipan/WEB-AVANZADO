const elementos = document.querySelectorAll(".fade-in");

const opciones = { threshold: 0.3 };

const observador = new IntersectionObserver((entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("appear");
      observador.unobserve(entrada.target);
    }
  });
}, opciones);

elementos.forEach((elemento) => observador.observe(elemento));

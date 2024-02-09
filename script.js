function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}




// Función para generar círculos aleatorios
function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.querySelector(".container").appendChild(circle);

    // Posicionamiento aleatorio
    const size = Math.random() * 100 + 20; // Tamaño entre 20 y 120 px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    // Animación de movimiento aleatorio
    gsap.to(circle, {
        duration: Math.random() * 2 + 1, // Duración entre 1 y 3 segundos
        x: x + Math.random() * 200 - 100,
        y: y + Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        repeat: -1, // Repetir infinitamente
        ease: "power1.inOut" // Tipo de easing
    });
}

// Generar varios círculos al cargar la página
for (let i = 0; i < 20; i++) {
    createCircle();
}
// Animación del texto
gsap.to(".animated-text", {
    duration: 2,
    x: "-10%",
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

// Función para animar las letras del texto
function animateText() {
    const text = document.querySelector(".animated-text");
    const letters = text.textContent.split("");
    text.textContent = ""; // Vaciar el contenido del texto para agregar las letras animadas

    letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0; // Inicialmente ocultar la letra
        text.appendChild(span);

        // Animación para mostrar la letra gradualmente
        gsap.to(span, {
            duration: 1,
            opacity: 1,
            delay: index * 0.1 // Agregar un pequeño retraso para cada letra
        });
    });
}

// Llamar a la función para animar el texto cuando se carga la página
animateText();



function mostrarDescripcion(tarjeta) {
    tarjeta.querySelector('.descripcion').style.display = 'block';
}

function ocultarDescripcion(tarjeta) {
    tarjeta.querySelector('.descripcion').style.display = 'none';
}





document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    emailjs.init("pxXNVGWzLBtm5cK_J");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        var nombre = document.getElementById('nombre').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;

        emailjs.send("service_fdwe75n", "template_xgt94ud", {
            nombre: nombre,
            telefono: telefono,
            mensaje: mensaje
        })
        .then(function(response) {
            console.log('Correo enviado con éxito', response);
            alert('¡El correo se ha enviado con éxito!');
        }, function(error) {
            console.log('Error al enviar el correo', error);
            alert('¡Ocurrió un error al enviar el correo!');
        });
    });
});
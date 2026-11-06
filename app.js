document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interacción del Botón de Urgencias
    const btnUrgencias = document.getElementById('boton-urgencias');
    if (btnUrgencias) {
        btnUrgencias.addEventListener('click', (e) => {
            // Previene el comportamiento por defecto y muestra una alerta amigable
            e.preventDefault();
            alert('Llamando a la línea de urgencias: 3197418761.\n¡Nuestro equipo veterinario está listo para ayudarte!');
            
            // Opcional: Cambia el texto temporalmente para confirmar la acción
            const textoOriginal = btnUrgencias.innerText;
            btnUrgencias.innerText = "¡Llamando ahora!...";
            setTimeout(() => {
                btnUrgencias.innerText = textoOriginal;
            }, 3000);
        });
    }

    // 2. Animación de aparición en cascada para las tarjetas de servicios
    const tarjetas = document.querySelectorAll('.tarjeta-servicio');
    tarjetas.forEach((tarjeta, index) => {
        // Estado inicial invisible
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(30px)';
        tarjeta.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Retraso escalonado basado en el índice de la tarjeta
        setTimeout(() => {
            tarjeta.style.opacity = '1';
            tarjeta.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });

    // 3. Resaltar la página activa en el menú de navegación
    const linksNav = document.querySelectorAll('.nav-links a');
    const urlActual = window.location.pathname.split('/').pop();
    
    linksNav.forEach(link => {
        if(link.getAttribute('href') === urlActual) {
            link.style.borderBottom = "2px solid white";
            link.style.paddingBottom = "3px";
        }
    });
});
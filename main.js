document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interacción para el Botón de Urgencias (contacto.html)
    const btnUrgencias = document.getElementById('boton-urgencias');
    if (btnUrgencias) {
        btnUrgencias.addEventListener('click', (e) => {
            e.preventDefault();
            // Muestra una alerta intuitiva antes de ejecutar la acción
            alert("¡Llamando a Urgencias (3197418761)!\n\nMantén la calma, nuestro equipo está listo para recibir a tu mascota.");
            // Opcional: Redirigir al marcador telefónico en dispositivos móviles
            window.location.href = "tel:+573197418761"; 
        });
    }

    // 2. Interacción para las Tarjetas de Servicios (servicios.html)
    const tarjetas = document.querySelectorAll('.tarjeta-servicio.interactiva');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const nombreServicio = tarjeta.querySelector('h3').innerText;
            alert(`Has seleccionado: ${nombreServicio}.\n\nPróximamente podrás agendar tu cita para este servicio directamente desde aquí.`);
        });
    });

});
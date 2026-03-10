document.addEventListener('DOMContentLoaded', () => {
    const numeroTel = "5493512483474";
    const botones = document.querySelectorAll('.btn-ver');

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const producto = card.getAttribute('data-producto');
            const mensaje = encodeURIComponent(`¡Hola Meel! 🧁 Vi la web y quiero consultar sobre: ${producto}. ¿Estoy en la zona de envío gratis?`);
            window.open(`https://wa.me/${numeroTel}?text=${mensaje}`, '_blank');
        });
    });
});

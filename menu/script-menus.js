document.addEventListener('DOMContentLoaded', () => {
    const numeroTel = "5493512483474";
    
    const menuSemanal = {
        1: "Arroz amarillo con pollo",
        2: "Tortilla de papas con hamburguesa",
        3: "Milanesas de pechuga a la napolitana con puré",
        4: "Costeleta a caballo con papas fritas",
        5: "Empanadas árabes",
        6: "Pastas con salsa bolognesa",
        0: "Hoy descansamos de los platos principales"
    };

    const hoy = new Date().getDay(); // 0 es domingo, 1 lunes...
    const platoDelDia = menuSemanal[hoy];

    // Actualizamos el título de "Hoy"
    document.getElementById('plato-hoy').innerText = platoDelDia;

    // Resaltamos el día en la lista inferior
    if (hoy !== 0) {
        const diaLista = document.getElementById(`d-${hoy}`);
        if (diaLista) diaLista.classList.add('hoy-resaltado');
    }

    // Botón de WhatsApp
    document.getElementById('pedir-comida').addEventListener('click', () => {
        const mensaje = encodeURIComponent(`¡Hola! Quisiera pedir el menú de hoy: ${platoDelDia}. ¿Llegan a mi zona?`);
        window.open(`https://wa.me/${numeroTel}?text=${mensaje}`, '_blank');
    });
});

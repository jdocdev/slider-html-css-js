document.querySelectorAll('.slider--nav').forEach(function (nav) {
    nav.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtener la diapositiva actual y la siguiente
        var current = document.querySelector('.flex--active').dataset.slide;
        var next = this.dataset.slide;

        // Eliminar la clase "active" de todos los botones de navegación
        document.querySelectorAll('.slider--nav').forEach(function (nav) {
            nav.classList.remove('active');
        });

        // Añadir la clase "active" al botón de navegación seleccionado
        this.classList.add('active');

        if (current === next) {
            return false;
        } else {
            // Añadir la clase "flex--preStart" a la diapositiva siguiente
            var nextSlide = document.querySelector('.flex__container[data-slide="' + next + '"]');
            nextSlide.classList.add('flex--preStart');

            // Añadir la clase "animate--end" a la diapositiva actual
            var currentSlide = document.querySelector('.flex--active');
            currentSlide.classList.add('animate--end');

            setTimeout(function () {
                // Añadir la clase "flex--active" a la diapositiva siguiente
                nextSlide.classList.remove('animate--start', 'flex--preStart');
                nextSlide.classList.add('flex--active');

                // Añadir la clase "animate--start" a la diapositiva siguiente
                currentSlide.classList.add('animate--start');
                currentSlide.classList.remove('animate--end', 'flex--active');
            }, 800);
        }
    });
});

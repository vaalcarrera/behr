(() => {
    console.log('Script cargado'); // Para verificar que el script se ha cargado

    const cargarPeliculas = async () => {
        try {
            console.log('Iniciando la carga de películas'); // Para verificar que la función se llama

            const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=86c391894dbd0937ad4c471416a6ca2a&language=es-MX');

            console.log('Respuesta recibida', respuesta); // Para verificar la respuesta de la API

            if (respuesta.status === 200) {
                const datos = await respuesta.json();
                console.log('Datos recibidos', datos); // Para verificar los datos recibidos

                let peliculas = '';

                datos.results.forEach(pelicula => {
                    if (pelicula.poster_path) {
                        peliculas += `
                            <div>
                                <img class="poster hvr-pulse-grow" src="https://image.tmdb.org/t/p/w200/${pelicula.poster_path}" alt="${pelicula.title}">
                                <h3>${pelicula.title}</h3>
                            </div>
                        `;
                    } else {
                        console.log(`La película ${pelicula.title} no tiene poster_path`);
                    }
                });

                document.getElementById('contenedor__populares').innerHTML = peliculas;
                console.log('Películas cargadas en el DOM'); // Para verificar que se ha actualizado el DOM

            } else if (respuesta.status === 401) {
                console.log('Clave de API incorrecta');
            } else if (respuesta.status === 404) {
                console.log('No se encontraron películas');
            } else {
                console.log('Hubo un error desconocido');
            }

        } catch (error) {
            console.log('Error de conexión o algo salió mal: ', error);
        }
    };

    cargarPeliculas();
})();

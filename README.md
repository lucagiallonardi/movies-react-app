Consumo de API TheMovieDB

https://www.themoviedb.org/documentation/api

Realice el consumo de la api con fetch, esta funcion la guarde en un archivo aparte para poder utilizar los datos obtenidos en otros varios componentes sin tener que realizar el fetching de nuevo.

Agregue un Spinner de load para que aparezca mientras se cargan los datos de la API. Para esto setee el estado de la carga con isLoading y luego con un if comprobe si isLoading es true para mostrar el spinner.

Los estilos los realice en modulos ya que me resulta mas practico y facil de utilizar.

Para el routing utilice react-router-dom y a traves de link y routes declaré las diferentes rutas y a donde me lleva cada una de ellas.

Para mostrar los detalles de las peliculas en MoviesDetails lo que hice fue tomar el id de la pelicula seleccionada en el Grid, este id se concatena con el enlace y solo se muestran los datos de la pelicula con dicha id.

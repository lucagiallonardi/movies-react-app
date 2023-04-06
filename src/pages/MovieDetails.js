import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../Componentes/Spinner';
import styles from '../stylesheet/MovieDetails.module.css'
import get from '../utils/httpClient';
import movie from './movie.json'


function MovieDetails(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);


    useEffect(()=>{
        setIsLoading(true);

        get('/movie/' + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId]);

    if (isLoading){
        return <Spinner/>
    }

    if (!movie){
        return null;
    }

    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    return <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title} className={`${styles.column} ${styles.movieImage}`}/>
        <div className={`${styles.column} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Titulo:</strong> {movie.title}</p>
            <p>
               <strong>Generos: </strong>{movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p><strong>Descripción:</strong> {movie.overview}</p>
        </div>
    </div>
}

export default MovieDetails;
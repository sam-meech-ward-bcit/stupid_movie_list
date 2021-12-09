import './MovieCard.css'

export default function MovieCard({movie}) {

    const imageUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`

    return (
        <div className="movie-card">
            <img src={imageUrl}></img>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
    )
}
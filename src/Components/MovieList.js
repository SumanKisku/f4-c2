
function MovieList({movies}) {

    

    return(
        <div className="movies">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {movies.map((movie) => 
                                    <tr key={movie.title}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.year}</td>
                                    </tr>
                            )}
                        
                    </tbody>
                </table>
        
        </div>
    )
}

export default MovieList;
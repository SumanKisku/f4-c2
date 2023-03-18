
function GenreFilter({genres}) {


    function handleClick(e) {
        console.log(`Filtered by ${e.currentTarget.innerText}`)
    }

    return(
        <div className="genres">
        <h2>Filter by Genre</h2>
        <div className="genres-btns">
            {genres.map(genre => <button className="btn" onClick={handleClick} key={genre}>{genre}</button>)}
        </div>
        </div>
    )
}

export default GenreFilter;
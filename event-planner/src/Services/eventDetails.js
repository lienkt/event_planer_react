export const getMovies = async () => {
	let response = await fetch(`http://127.0.0.1:5000/`)
    let movies = await response.json()
    return movies
    
}

export const getMovieById = async (movieId) => {
	let response = await fetch(`http://127.0.0.1:5000/2`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let movie = await response.json()
    return movie
}
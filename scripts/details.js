addEventListener("DOMContentLoaded", async function() {
    const urlParam = new URLSearchParams(window.location.search)
    const movieID = urlParam.get('id')
    document.querySelector("#editBtn").setAttribute("href", "edit.html?id=" + movieID)
    console.log(movieID)

    const response = await fetch(`${API_URL}/api/movies/` + movieID)
    const movie = await response.json()
    console.log(movie)

    let html = ""
    html += `
        <h3>Movie Title - ${movie.title} </h3>
        <p>Releae Year - ${movie.releaseYear} </p>
        <p>Rating - ${movie.rating} </p>
        <p>IMDB Link - <a href=${movie.imdbLink}>${movie.title}</a> </p>
        <p>Description - ${movie.description}</p>
        <p>Genre - ${movie.genre}</p>
        `
    
    document.querySelector("#details").innerHTML = html

})
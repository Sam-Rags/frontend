document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#searchBtn").addEventListener("click", searchMovies)
    loadMovies()
})

async function loadMovies() {
    try {
        const res = await fetch(`${API_URL}/api/movies`)
        const movies = await res.json()

        const list = document.querySelector("#movieList")
        list.innerHTML = ""

        movies.forEach(movie => {
            const div = document.createElement("div")
            div.className = "movie"

            const h3 = document.createElement("h3")
            h3.textContent = movie.title

            list.appendChild(h3)
        })
    }
    catch (err){
        console.error("Error loading movies:", err)
    }
}

async function searchMovies() {
    try {
        const rest = await(`${API_URL}/api/movies`)
        const movies = await res.json()

        if (movies.title) {
            window.location.replace("details.html/" + movie._id)
        }
        else {
            alert ("Movie not found, try refining your search.")
        }
    }
    catch (err) {
        console.error("Error searching mnovies", err)

    }
}
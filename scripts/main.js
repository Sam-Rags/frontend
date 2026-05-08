document.addEventListener("DOMContentLoaded", () => {
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
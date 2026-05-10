document.addEventListener("DOMContentLoaded", () => {
    loadMovies()
})

async function loadMovies() {
    try {
        const res = await fetch(`${API_URL}/api/movies`)
        const movies = await res.json()

        document.querySelector("#totalMovies").textContent = movies.length

        const list = document.querySelector("#movieList")
        list.innerHTML = ""

        movies.forEach(movie => {
            const div = document.createElement("div")
            div.className = "movie-card"

            const h3 = document.createElement("h3")
            h3.textContent = movie.title

            const a = document.createElement("a")
            a.href = "details.html?id=" + movie._id
            a.textContent = movie.title

            const h4 = document.createElement("h4")
            h4.textContent = movie.releaseYear

            div.append(a)
            div.append(h4)
            list.append(div)
        })
    }

    catch (err) {
        console.error("Error loading courses", err)

    }
}
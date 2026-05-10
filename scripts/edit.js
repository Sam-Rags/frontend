addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#saveBtn").addEventListener("click", updateMovie)
    document.querySelector("#deleteBtn").addEventListener("click", deleteMovie)
    const urlParam = new URLSearchParams(window.location.search)
    const movieID = urlParam.get('id')
    const response = await fetch(`${API_URL}/api/movies/` + movieID)
    const movie = await response.json()

    if (response.ok) {
        // set value of movie fields to those returned by the response
        document.querySelector("#movieID").value = movie._id
        document.querySelector("#movieTitle").value = movie.title
        document.querySelector("#year").value = movie.releaseYear
        document.querySelector("#rating").value = movie.rating
        document.querySelector("#imdbLink").value = movie.imdbLink
        document.querySelector("#description").value = movie.description
        document.querySelector("#genre").value = movie.genre
        
    }
    // takes the user entered values & updates the DB based on those
    async function updateMovie() {
        const movieID = document.querySelector("#movieID").value
        const movie = {
            title: document.querySelector("#movieTitle").value,
            releaseYear: document.querySelector("#year").value,
            rating: document.querySelector("#rating").value,
            imdbLink: document.querySelector("#imdbLink").value,
            description: document.querySelector("#description").value,
            genre: document.querySelector("#genre").value,
        }
        const response = await fetch("http://localhost:3000/api/movies/" + movieID, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })

        if (response.ok) {
            alert("Movie updated successfully!")
        }
        else {
            document.querySelector("#error").innerHTML = "Failed to update movie."
        }
    }

    // provides delete function & gives a confirm box 
    async function deleteMovie() {
        if (confirm("Are you sure you want to delete: \n" + movie.title + "?")) {
        const response = await fetch("http://localhost:3000/api/movies/" + movieID, {
            method: "DELETE"
        })
        if (response.ok) {
            alert("Movie deleted successfully!")
            window.location.replace("browse.html")
        }
        else {
            document.querySelector("#error").innerHTML = "Failed to delete movie."
        }
    }
    else {
        return
    }
    }

})
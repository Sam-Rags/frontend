addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addMovie)
})

async function addMovie() {
    // create a song based on the form under add-movie.html
    const movie = {
        title: document.querySelector("#movieTitle").value,
        releaseYear: document.querySelector("#year").value,
        rating: document.querySelector("#rating").value,
        imdbLink: document.querySelector("#imdbLink").value,
        description: document.querySelector("#description").value,
        genre: document.querySelector("#genre").value,
    }
    
    const response = await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(movie)
    })

    if (response.ok) {
        const results = await response.json()
        alert("Added new movie with ID of: " + results._id)

        document.querySelector("form").reset()
    }
    else {
        document.querySelector("#error").innerHTML = "Failed to add movie."
    }
}
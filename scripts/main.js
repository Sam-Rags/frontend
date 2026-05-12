document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#searchText").addEventListener("keyup", search)
    loadMovies()
})


async function loadMovies() {
    try {
        const res = await fetch(`${API_URL}/api/movies`)
        const movies = await res.json()

        document.querySelector("#totalMovies").textContent += movies.length
        

        const list = document.querySelector("#movieList")
        list.innerHTML = ""

        movies.forEach(movie => {
            const li = document.createElement("li")
            li.className = "movie-card"

            const h3 = document.createElement("h3")
            h3.textContent = movie.title

            const a = document.createElement("a")
            a.href = "details.html?id=" + movie._id
            a.textContent = movie.title

            const h4 = document.createElement("h4")
            h4.textContent = movie.releaseYear

            li.append(a)
            li.append(h4)
            list.append(li)
        })
    }
    catch (err) {
        
        console.error(err)
    }
}

function search() {
    var input = document.querySelector("#searchText")
    var filter = input.value.toUpperCase()
    var ul = document.querySelector("#movieList")
    var li = ul.getElementsByTagName("li")
    var a
    var txtValue
    
    
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
            
            
        }
    }
}

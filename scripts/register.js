document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#registerUser").addEventListener("click", registerUser)
})

async function registerUser() {
    const user = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
    }

    const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",   
        },
        body: JSON.stringify(user)
    })

    if (response.ok) {
        const results = await response.json()
        alert("New user added with ID of: " + result._id)

        // document.querySelector("form").reset()
    }
    else {
        document.querySelector("#error").innerHTML = "Failed to add user."
    }
}
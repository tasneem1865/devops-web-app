function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "Updated form submitted successfully 🎉, " + name + "!";

    return false;
}
function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "Form submitted successfully, " + name + "!";

    return false;
}
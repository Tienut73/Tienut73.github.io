function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate"
    ).textContent = new Date().toLocaleDateString("en-gb", options);
} catch (e) {
    alert ("error")
}
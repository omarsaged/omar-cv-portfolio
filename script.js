const hideButton = document.getElementById("hideButton");
const skillsSection = document.getElementById("skills");

if (hideButton && skillsSection) {

    hideButton.addEventListener("click", function () {

        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            hideButton.innerText = "Hide Skills";
        } else {
            skillsSection.style.display = "none";
            hideButton.innerText = "Show Skills";
        }

    });

}

const themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("lightMode");
}

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("lightMode");

        if (document.body.classList.contains("lightMode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    });

}
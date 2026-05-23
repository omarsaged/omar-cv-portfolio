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
function showAbout() {
    let about = document.getElementById("aboutText");

    if (about.style.display === "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}

function showEducation() {
    let education = document.getElementById("educationList");

    if (education.style.display === "none") {
        education.style.display = "block";
    } else {
        education.style.display = "none";
    }
}

function showSkills() {
    let skills = document.getElementById("skillsList");

    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}

function showExperience() {
    let experience = document.getElementById("experienceText");

    if (experience.style.display === "none") {
        experience.style.display = "block";
    } else {
        experience.style.display = "none";
    }
}

function showLanguages() {
    let languages = document.getElementById("languagesList");

    if (languages.style.display === "none") {
        languages.style.display = "block";
    } else {
        languages.style.display = "none";
    }
}
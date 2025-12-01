const theme = document.querySelector(".theme")
let ThemeOn = false;

theme.addEventListener("click", () => {
    ThemeOn = !ThemeOn;

    if(ThemeOn) {
        theme.innerHTML = '<i class="ri-sun-line"></i'
        document.body.classList.add("darktheme")
        localStorage.setItem("theme", "dark")
    }
    else {
        theme.innerHTML = '<i class="ri-moon-fill"></i'
        document.body.classList.remove("darktheme")
        localStorage.setItem("theme", "light")
    }
})

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        ThemeOn = true;
        theme.innerHTML = '<i class="ri-sun-line"></i'
        document.body.classList.add("darktheme");
    } else {
        ThemeOn = false;
        theme.innerHTML = '<i class="ri-moon-fill"></i'
        document.body.classList.remove("darktheme");
    }
});

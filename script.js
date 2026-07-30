// Pretty Center

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });

});

// مشاركة الصفحة
function sharePage() {

    if (navigator.share) {

        navigator.share({
            title: "Pretty Center",
            text: "Visit Pretty Center",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Page link copied.");

    }

}

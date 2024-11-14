
$(document).ready(function () {
    $("main").css("height", window.innerHeight - document.querySelector("header").offsetHeight);
});

$(window).resize(function () { 

    // $("main").css("height", window.innerHeight - document.querySelector("header").offsetHeight);
});



document.querySelectorAll(".Edit-Button").forEach((e, index) => {

    e.addEventListener("click", () => {
        const height_of_textarea = document.getElementsByTagName("pre")[index].offsetHeight;
        document.getElementsByTagName("pre")[index].style.display = "none";
        document.querySelectorAll(".Edit-Text")[index].style.display = "block";
        document.querySelectorAll(".Edit-Text")[index].style.height = document.querySelectorAll(".Edit-Text")[index].scrollHeight + "px";
        document.querySelectorAll(".Post-Container")[index].style.paddingBottom = "60px";
        document.querySelectorAll(".Change-Submit")[index].style.display = "block";

    })
    


});



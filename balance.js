const arrow01 = document.getElementById("arrow01");
const data01 = document.getElementById("data01");
const data02 = document.getElementById("data02");
const data03 = document.getElementById("data03");

arrow01.addEventListener("click", function () {

    if (data01.classList.contains("hidden") && data02.classList.contains("hidden") && data03.classList.contains("hidden")) {
        data01.classList.remove("hidden");
        data02.classList.remove("hidden");
        data03.classList.remove("hidden");
    } else {
        data01.classList.add("hidden");
        data02.classList.add("hidden");
        data03.classList.add("hidden");
    }

    if (arrow01.classList.contains("rotation")) {
        arrow01.classList.remove("rotation");
    } else {
        arrow01.classList.add("rotation");
    }
});

const arrow02 = document.getElementById("arrow02");
const data04 = document.getElementById("data04");
const data05 = document.getElementById("data05");
const data06 = document.getElementById("data06");

arrow02.addEventListener("click", function () {

    if (data04.classList.contains("hidden") && data05.classList.contains("hidden") && data06.classList.contains("hidden")) {
        data04.classList.remove("hidden");
        data05.classList.remove("hidden");
        data06.classList.remove("hidden");
    } else {
        data04.classList.add("hidden");
        data05.classList.add("hidden");
        data06.classList.add("hidden");
    }

    if (arrow02.classList.contains("rotation")) {
        arrow02.classList.remove("rotation");
    } else {
        arrow02.classList.add("rotation");
    }
});
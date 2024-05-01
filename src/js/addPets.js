const btnOpenmodal = document.querySelector(".button-addopen-modal");
const titleinputADD = document.querySelector(".titleinput");
const genreinputADD = document.querySelector(".genreinput");
const directorinputADD = document.querySelector(".directorinput");
const yearinputADD = document.querySelector(".yearinput");
const btnADD = document.querySelector(".btnADD");
const mobalADD = document.querySelector(".modal-window");
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", () => {
    mobalADD.classList.add("true");
});

btnOpenmodal.addEventListener("click", () => {
    mobalADD.classList.remove("true");
});

async function renderPets() {
    btnADD.addEventListener("click", async () => {
        mobalADD.classList.add("true");
        const newPets = {
            namePets: titleinputADD.value,
            owner: genreinputADD.value,
            director: directorinputADD.value,
            year: yearinputADD.value,
        };

        console.log(123);
        console.log(newPets);

        try {
            const response = await fetch('http://localhost:3000/petsUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPets),
            });

        } catch (error) {
            console.error('error', error);
        }
    });
}

renderPets();

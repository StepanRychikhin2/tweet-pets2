const btnClosee = document.querySelector(".btn-close3");
const btnEdOpenModal2ed = document.querySelector(".btnEd3");
const btnOpenmodaled = document.querySelector(".button-onovel-modal");
const inputed = document.querySelector(".inputed");
const modalWindow3 = document.querySelector(".modal-window3");

btnOpenmodaled.addEventListener("click", () => {
  modalWindow3.classList.remove("true");
  console.log(33)
});


const titleinput4 = document.querySelector(".titleinput4");
const genreinput4 = document.querySelector(".genreinput4");
const directorinput4 = document.querySelector(".directorinput4");
const yearinput4 = document.querySelector(".yearinput4");
const btn4 = document.querySelector(".btnADD4");
const mobal4 = document.querySelector(".modal-window");
const btnClose4 = document.querySelector(".btn-close4");
const modalWindow4 = document.querySelector(".modal-window4");
btnEdOpenModal2ed.addEventListener("click", () =>  {
    if (inputed.value == 0) {
        alert("Ви повинні ввести ID поста інакшке ми не зможемо вам допомогти")
    } else {
        modalWindow3.classList.add("true");
        modalWindow4.classList.remove("true");
    }
   
})
btnClose4.addEventListener("click", () =>  {
    console.log(33)
    modalWindow4.classList.add("true");
})

btnClosee.addEventListener("click", () =>  {
    console.log(33)
    modalWindow3.classList.add("true");
})


export async function edit2() {
    btn4.addEventListener("click", async () => {
        modalWindow4.classList.add("true");
        const movieIdToUpdate = inputed.value;
        const updatedMovieData = {
            namePets: titleinput4.value,
            owner: genreinput4.value,
            director: directorinput4.value,
            year: yearinput4.value,
        };

        try {
            const response = await fetch(`http://localhost:3000/petsUser/${movieIdToUpdate}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedMovieData),
            });


          
        } catch (error) {
            console.error("error", error);
        }
    });
}
edit2()

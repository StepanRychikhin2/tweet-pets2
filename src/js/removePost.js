const btnClosee = document.querySelector(".btn-close2");
const btnDel = document.querySelector(".btnADD2");
const btnOpenmodalDel = document.querySelector(".button-delete");
const inputdel = document.querySelector(".inputdel");
const modalWindow2 = document.querySelector(".modal-window2");

btnClosee.addEventListener("click", () => {
  modalWindow2.classList.add("true");
});





btnOpenmodalDel.addEventListener("click", () => {
  modalWindow2.classList.remove("true");
});

export async function removeTweet() {
  btnDel.addEventListener("click", async () => {
      modalWindow2.classList.add("true");
      const petsNameToDelete = inputdel.value;

      try {
          const response = await fetch(`http://localhost:3000/petsUser/${petsNameToDelete}`, {
              method: "DELETE",
          });
      } catch (error) {
          console.error("error", error);
      }
  });
}


removeTweet();

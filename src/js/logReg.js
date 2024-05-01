const moballogWindow = document.querySelector(".modal-window-log")
const mobalLog = document.querySelector(".mobalLog")
const btnCloselog = document.querySelector(".btn-closelog")
const nameinplog = document.querySelector(".nameinplog")
const passinplog = document.querySelector(".passinplog")
const btnLog = document.querySelector(".btnLog")
const buttonLogModal = document.querySelector(".button-sing-in-modal")
const buttonRegModal = document.querySelector(".button-Sing-up-modal")



buttonRegModal.addEventListener("click", () => {
    moballogWindow.classList.remove("true");
})

btnCloselog.addEventListener("click", () => {
    moballogWindow.classList.add("true");
})


btnLog.addEventListener("click", () => {
    let namelog = nameinplog.value;
    let passlog = passinplog.value;
    if (namelog == 0 || passlog == 0) {
        alert("Введіть коктне значення")
    } else {
        localStorage.setItem("login", namelog)
localStorage.setItem("password",passlog)
alert("Ви успішно заереструвались тепер можете ввійти в акаунт")
moballogWindow.classList.add("true");
    }
   


})

const mobalregWindow = document.querySelector(".modal-window-reg")
const mobalreg = document.querySelector(".mobalreg")
const btnClosereg = document.querySelector(".btn-closereg")
const nameinpreg = document.querySelector(".nameinpreg")
const passinpreg = document.querySelector(".passinpreg")
const btnreg = document.querySelector(".btnreg")
const gost = document.querySelector(".gost")
async function getName() {
    let namereg = await localStorage.getItem("login");
    if (namereg == null) {
        gost.textContent = "Гість";
        console.log(123)
        
    } else {
         gost.textContent = localStorage.getItem("login");
        
    }
    }
getName()

buttonLogModal.addEventListener("click", () => {
    mobalregWindow.classList.remove("true");
    console.log(123)
})


btnClosereg.addEventListener("click", () => {
    mobalregWindow.classList.add("true");
})

btnreg.addEventListener("click", () => {
    let namereg = localStorage.getItem("login");

    let passreg = localStorage.getItem("password");
    if (nameinpreg.value !== namereg || passinpreg.value !== passreg) {
        gost.textContent = "Гість";
        alert("Ви ввели не правельний логін або пароль!!!")
    } else {
        gost.textContent = localStorage.getItem("login");
        alert("Ви успішно ввійшли в акаунт")
mobalregWindow.classList.add("true");
    }
   


})


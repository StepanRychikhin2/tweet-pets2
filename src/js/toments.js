const btnOpenmodal = document.querySelector(".button-addopen-modal")
const commentNamee = document.querySelector(".nameinpcom")
const commentBodyy = document.querySelector(".passinpcom")
const sentComent = document.querySelector(".btncom")
const modalComent = document.querySelector(".modal-window-com")
const btnClose = document.querySelector(".btn-closecom")
const comentsZoon = document.querySelector(".coments")
const openComent = document.querySelector(".button-coment-modal")
console.log(openComent)

let comments = [];


    loadComments();

openComent.addEventListener("click", () => {
    modalComent.classList.remove("true");
    console.log(123)

})
 
btnClose.addEventListener("click", () => {
    modalComent.classList.add("true");
})



sentComent.onclick = function(){
    console.log(commentBodyy.value)
    if (commentBodyy.value == 0 || commentNamee.value == 0) {
    alert("Заповніть всі поля")
    } else {
        modalComent.classList.add("true");
    let commentName = commentNamee;
    let commentBody = commentBodyy;

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
    }
    
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let commentField = comentsZoon;
    let out = '';
    comments.forEach(function(item){
        out += `<div class="box-out">
        <p class="text-right small ff"><em>${timeConverter(item.time)}</em></p>
        <p class="text-right small ff"><em>Ім'я</em></p>
        <p class="alert alert-primary ff" role="alert">${item.name}</p>
        <p class="text-right small ff"><em>Коментар</em></p>
        <p class="alert alert-success ff" role="alert">${item.body}</p>
        </div>`
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
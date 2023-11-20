document.querySelector("#submitForm").addEventListener("click", function() {
    let comment = document.querySelector("#comment").value;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let listItem = document.createElement("li");
    listItem.innerHTML = time + '\t' + comment;
    document.querySelector("#commentList").appendChild(listItem);
    document.querySelector("#comment").value = "";
});
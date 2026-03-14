// find out the button,box,empty list from the html. //
const taskinput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");
// what happened when we press on add button. \\
addbtn.addEventListener("click", function () {

    // pickuo written content from the BaseAudioContext. \\
const tasktext = taskinput.value;

// warning for pressing on empty button. //
if (tasktext === "") {
    alert("Please write any name here!");
    // return; stop here dont go for next. //
}
// create a new itemlist in html. //
const li = document.createElement("li");
li.textContent = tasktext //put written content in <li>//
//add new <li> in our old (<ul>)//
    tasklist.appendChild(li);
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.classList.add("delete-btn");
    deletebtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(deletebtn);
    taskinput.value = "";
});

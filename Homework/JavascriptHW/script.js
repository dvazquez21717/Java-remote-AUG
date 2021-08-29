function addItem(){
    let newLi = document.createElement('li');
    let text = document.getElementById('toDo').value;
    newLi.innerHTML = text;
    document.getElementById("toDo").value = "";
    document.getElementById("list").appendChild(newLi);
    
    newLi.onclick = function(){this.remove()}
}

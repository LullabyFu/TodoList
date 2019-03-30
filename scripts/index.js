'use strict';
var todoList = [];
var doneList = [];
function submitTodo(){
    var text = document.getElementById("addNew");
    addNewTodoList(text.value);
    text.value="";
}

function addNewTodoList(listContent){
    var todo = document.createElement('li');
    todo.className='todo';
    todo.innerHTML="<input type='checkbox' class='box' onchange='addToAnotherList(this)'/>"+
    "<p>"+listContent+"</p>"+
    "<a onclick='deleteMission(this.parentElement)'></a>";
    var listTodo = document.getElementById('ListTodo');
    listTodo.appendChild(todo);
    todoList.push(todo);
}

function addToAnotherList(box){
    var li = box.parentElement;
    if(li.getAttribute("class")=="todo"){
        todoList.splice(todoList.indexOf(li),0);
        var listDone = document.getElementById("ListDone");
        li.setAttribute('class','done');
        var temp = listDone.children;
        listDone.insertBefore(li,temp[1]);
        doneList.shift(li);
    }
    else{
        doneList.splice(doneList.indexOf(li),0);
        li.setAttribute('class','todo');
        var listTodo = document.getElementById("ListTodo");
        listTodo.appendChild(li);
        todoList.push(li);
    }
}

function deleteMission(mission){
    if(mission.getAttribute('class')=='todo'){
        todoList.splice(todoList.indexOf(mission),0);
    }
    else{
        doneList.splice(doneList.indexOf(mission),0);
    }
    var list = mission.parentElement;
    list.removeChild(mission);
}

window.load = load();

function load(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://szuwechat.cn/tech", true);
    xhr.send('username=szu&password=666');
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            console.log(xhr.responseText);
        }
        else{
            console.log('loading');
        }
    }
}

// var p1=new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.open();
//     xhr.send('POST','https://szuwechat.cn/tech', true);
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4){
//             resolve(xhr.responseText);
//         }
//         else{
//             reject('loading');
//         }
//     }();
// });

// p1.then(function(result){
//     console.log(result);
// }).catch(function(result1){
//     console.log(result1);
// });
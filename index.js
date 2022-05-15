// in js im taking the control of div in html
let container = document.getElementById("main");
//now im creating h1 tag
let mainhead = document.createElement("h1");
mainhead.innerHTML = "MY TO-DO LIST";
// // in js im taking the control of div in html
container.appendChild(mainhead);

// creating input tag
let text = document.createElement("input");
text.type = "text";
text.setAttribute('id', 'box');
text.placeholder = "Add Text";
// alternative - content.value = "Write here";
container.appendChild(text)
// creating button for add
let adding = document.createElement("button");
adding.innerHTML = "ADD"
adding.setAttribute('onclick', 'adding1()')
container.appendChild(adding);
//removing
let clear = document.createElement('button');
clear.innerHTML = 'ClearAll';
clear.setAttribute('onclick', 'clearall()');
container.appendChild(clear);

//lists
let list = document.createElement('ul');
list.setAttribute('id', 'orderlist');
container.appendChild(list);

function adding1() {
    let listitems = document.getElementById('orderlist');
    if (text.value != '') {
        let makeli = document.createElement('li');
        makeli.innerHTML = '<div>' + text.value + ' ' + '<span style="cursor:pointer">\u00D7</span> </div>';

        listitems.appendChild(makeli);
        text.value = '';

        makeli.onclick = function () {
            listitems.removeChild(makeli);
        }
    }

}

function clearall() {
    let listitems = document.getElementById('orderlist');
    listitems.innerHTML = '';
    text.value = '';
}
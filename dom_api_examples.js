const para = document.createElement('p');
para.textContent = "This is created by using DOM API ";

para.setAttribute("id", "jsPara");
para.classList.add("one")
para.classList.add("second");
para.classList.remove("second");
console.log(para.getAttribute("id"));


const span = document.createElement('span'); //dom name
span.id="span-id";
span.className = "blue";
span.innerHTML = "   This is span created by <em>document.createElement </em>";
span.style.backgroundColor = "yello";   


para.appendChild(span);

document.body.appendChild(para);

const hobbies = ["coding" , "gardening" , "Tech "];

const list = document.createElement("ul");
for (let hobby of hobbies ){
    list.innerHTML +="<li class='blue'>" + hobby + "</li>";
}

document.body.appendChild(list);

//get the elements

console.log(document.getElementById("firstPara"));

console.log(document.getElementsByClassName("blue"));

// respond to clicks , boxes different sizes
let tower1 = document.querySelector("#tower-1");
tower1.addEventListener("click", function() {
    let topDisc = tower1.children[tower1.children.length-1];
    topDisc.style.border = "1px black dashed"
})
let discElement = document.createElement("div");
discElement.style.height = "20px";
discElement.style.width = "150px";
discElement.style.backgroundColor = "red";
tower1.appendChild(discElement);

let discElement2 = document.createElement("div");
discElement2.style.height = "20px";
discElement2.style.width = "130px";
discElement2.style.backgroundColor = "blue";
tower1.appendChild(discElement2);

let discElement3 = document.createElement("div");
discElement3.style.height = "20px";
discElement3.style.width = "110px";
discElement3.style.backgroundColor = "green";
tower1.appendChild(discElement3);

let discElement4 = document.createElement("div");
discElement4.style.height = "20px";
discElement4.style.width = "90px";
discElement4.style.backgroundColor = "yellow";
tower1.appendChild(discElement4);
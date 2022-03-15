// respond to clicks , boxes different sizes
let tower1 = document.querySelector("#tower-1");
let selectedDisc;
tower1.addEventListener("click", function() {
    topDisc = tower1.children[tower1.children.length-1];
    if (selectedDisc) {
        if (topDisc  === undefined || topDisc.offsetWidth > selectedDisc.offsetWidth) {
            tower1.appendChild(selectedDisc);
            selectedDisc.style.border = ""
            selectedDisc = undefined;
        }
    } else if (topDisc) {
            selectedDisc = topDisc;
            selectedDisc.style.border = "1px black dashed";
    }
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

let tower2 = document.querySelector("#tower-2");
tower2.addEventListener("click", function() {
    topDisc2 = tower2.children[tower2.children.length-1];
    if (selectedDisc) {
        if (topDisc2  === undefined || topDisc2.offsetWidth > selectedDisc.offsetWidth) {
            tower2.appendChild(selectedDisc);
            selectedDisc.style.border = ""
            selectedDisc = undefined;
        }
    } else if (topDisc2) {
            selectedDisc = topDisc2;
            selectedDisc.style.border = "1px black dashed";
    }
})

let tower3 = document.querySelector("#tower-3");
tower3.addEventListener("click", function() {
    topDisc3 = tower3.children[tower3.children.length-1];
    if (selectedDisc) {
        if (topDisc3  === undefined || topDisc3.offsetWidth > selectedDisc.offsetWidth) {
            tower3.appendChild(selectedDisc);
            selectedDisc.style.border = ""
            selectedDisc = undefined;
        }
    } else if (topDisc3) {
            selectedDisc = topDisc3;
            selectedDisc.style.border = "1px black dashed";
    }
    if (tower3.children.length === 4) {
        alert("You won!");
    }
})


//Check width of top disc against width of selected disc
//If top disc is wider than selected disc, we can't place it there, else place it there
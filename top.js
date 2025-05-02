

 var sprites ={
    0:"static/img/dumb.png",
    1:"static/img/rose.png"
}

function selectItem(element){
    //menção honrrosa 
//     // console.log("deu")
//     var sprite = element.getAttribute("sprite")
//     // console.log(sprite)
//     var isSelected = element.getAttribute("selected")
//     // console.log(isSelected)
//     if(isSelected === "true"){
//         console.log("tá selecionado")
//         element.setAttribute("selected","false")
//         element.classList.remove("select")
//     }else{
//         // console.log("nao ta")
//         if(sprite in sprites){
//             // console.log("ta em sprites")
//             element.classList.add("select")
//             element.setAttribute("selected","true")
//     }else{
//         console.log("Sprite not listed")
//     }
// }}


    var currentlySelected = document.querySelector(".select");
    const sprite = element.getAttribute("sprite");
    if (currentlySelected) {
        currentlySelected.setAttribute("selected", "false");
        currentlySelected.classList.remove("select");        
    }
    element.setAttribute("selected", "true");
    element.classList.add("select");
    localStorage.setItem("ItemSelected",sprite)
}



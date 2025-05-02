


document.addEventListener('DOMContentLoaded', function () {
  //rezeta a seleção
  localStorage.setItem("ItemSelected", 0)
  
  
  const box = document.getElementById('box1');
  const hitbox = document.getElementById('rose')

  showItem()

  box.addEventListener('click', function () {
    let item = localStorage.getItem("HoldingItem")
    if(item!=1)
      hitbox.classList.remove("off")

    box.src = 'static/img/box2.png';


  })
});


document.addEventListener("keydown", function(event) {
  let selected = localStorage.getItem("ItemSelected")


    // Verifica se a tecla 'x' foi pressionada com Ctrl
    if (event.ctrlKey && event.key.toLowerCase() === "x") {
        event.preventDefault(); // Impede o comportamento padrão (como recortar texto)
        console.log("Ctrl + X foi pressionado!");
        // Aqui você pode chamar sua função ou executar uma ação
        localStorage.setItem("HoldingItem",selected)

        document.querySelectorAll(".select").forEach(el =>{
          if(el.getAttribute("selected")=="true"){
            el.classList.add("off")
          }
         })
         showItem()
    }
});




function showItem() {
   let HoldingItem = localStorage.getItem("HoldingItem")
   let itemShow = document.getElementById("itemShow")
   console.log(HoldingItem)
   if(HoldingItem!=null){
    itemShow.src = sprites[HoldingItem];
   }
   
   }
// function cutTutorial{


//    if(!(localStorage.getItem("CutTutorialDone"))){
//     localStorage.setItem("CutTutorialDone", 0)
// }
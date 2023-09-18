const btnGen = document.getElementById("btn-gen");
const containerBox = document.getElementById("container-box");

btnGen.addEventListener("click",function(){
  // 1. resetContainer
  containerBox.innerHTML="";

  // 2. Add box
  for(let i=1; i<=100; i++){
    // richiamo la creazione di un box
    const box = createBox(i);

    // per ogni box aggiungo un eventListner CLICK
    box.addEventListener("click", function(){
      // aggiungo o rimuovo la classe clicked per il cambio del bg
      this.classList.toggle("clicked");
    })
    
    // append del box, al containerBox
    containerBox.append(box);
  };
});

// ************** FUNCTION **************

function createBox(index){
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.innerHTML = `<span>${index}</span>`;
  return newBox;
}
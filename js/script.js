const btnGen = document.getElementById("btn-gen");
const containerBox = document.getElementById("container-box");
const dimBox = document.getElementById("input-dim");

btnGen.addEventListener("click",function(){
    // 1. resetContainer
  containerBox.innerHTML="";

  // seleziono dimBox
  const countBox = dimBox.value ** 2;

  // 2. Add box
  for(let i=1; i<=countBox; i++){
    // richiamo la creazione di un box
    const box = createBox(i,dimBox.value);

    // per ogni box aggiungo un eventListner CLICK
    box.addEventListener("click", function(){
      console.dir(this);
      console.log(this._boxID);
      // aggiungo o rimuovo la classe clicked per il cambio del bg
      this.classList.toggle("clicked");
    })
    
    // append del box, al containerBox
    containerBox.append(box);
  };
});

// ************** FUNCTION **************
function createBox(index,dimBox){
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.style.width = `calc(100% / ${dimBox})`;
  // newBox.innerHTML = index;
  newBox._boxID = index;
  return newBox;
}
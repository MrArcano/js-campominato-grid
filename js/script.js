const btnGen = document.getElementById("btn-gen");
const containerBox = document.getElementById("container-box");
const dimBox = document.getElementById("input-dim");

addOptionSelect();
init();


btnGen.addEventListener("click",function(){
    // 1. resetContainer
  containerBox.innerHTML="";

  init();

});

// ************** FUNCTION **************

// crea elemento box
function createBox(index,dimBox){
  const newBox = document.createElement("div");
  newBox.className = "box";
  // newBox.style.width = `calc(100% / ${dimBox})`;
  newBox.style.width = 100 / dimBox + "%";
  // newBox.innerHTML = index;
  newBox._boxID = index;
  return newBox;
}

// core software
function init(){
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
}

// Aggiungo option select

function addOptionSelect(){
  for(i=10; i>=2 ; i--){
    dimBox.innerHTML += `<option value="${i}">${i}x${i}</option>`;
  }
}
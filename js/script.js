const btnGen = document.getElementById("btn-gen");
const containerBox = document.getElementById("container-box");

btnGen.addEventListener("click",function(){
  // 1. resetContainer
  containerBox.innerHTML="";

  // 2. Add box
  for(let i=0; i<100; i++){
    const box = createBox();
    containerBox.append(box);
  };
});

// ************** FUNCTION **************

function createBox(){
  const newBox = document.createElement("div");
  newBox.className = "box";
  return newBox;
}
alert(" welcome to tic-tac game ");
 alert("note-x/o should be in box not align with box border");

alert("PRESS ok to start the game");

const firstUser=prompt("first player get X");



const secondUser=prompt("second player get y");
const boxes = document.querySelectorAll(".input > div"); 
let isdraging = false;     
let offsetX, offsetY;  
let dragTarget = null;     

boxes.forEach(box => { 
  box.addEventListener("mousedown", function(e) {   
    isdraging = true;
    box.style.cursor = "grabbing";                                              
    offsetX = e.clientX - box.offsetLeft;                                     
    offsetY = e.clientY - box.offsetTop;
    dragTarget = box;          
    box.classList.add("drag");     
    dragTarget.style.pointerEvents = "none";
  });
});

document.addEventListener("mousemove", (e) => { 
  if (isdraging && dragTarget) {
    const newX = e.clientX - offsetX; 
    const newY = e.clientY - offsetY;                  
    dragTarget.style.left = newX + "px"; 
    dragTarget.style.top = newY + "px";
    dragTarget.style.cursor = "grabbing"; 
  }
});

document.addEventListener("mouseup", (e) => { 
  
  const location = document.elementFromPoint(e.clientX, e.clientY);


  const a = document.querySelector(".area1");
  const b = document.querySelector(".area2");
  const c = document.querySelector(".area3");
  const d = document.querySelector(".area4");
  const k = document.querySelector(".area5");
  const f = document.querySelector(".area6");
  const g = document.querySelector(".area7");
  const h = document.querySelector(".area8");
  const i = document.querySelector(".area9");

  if (
    isdraging && dragTarget &&
    (location === a || location === b || location === c ||
     location === d || location === k || location === f ||
     location === g || location === h || location === i)
  ) {
    isdraging = false;

    dragTarget.style.pointerEvents = "auto";  
    dragTarget.style.cursor = "grab"; 


     location.innerText = dragTarget.innerText;

    dragTarget = null; 
    if (
      a.innerText === "X" && b.innerText === "X" && c.innerText === "X" ||
      d.innerText === "X" && k.innerText === "X" && f.innerText === "X" ||
      g.innerText === "X" && h.innerText === "X" && i.innerText === "X" ||

      a.innerText === "X" && d.innerText === "X" && g.innerText === "X" ||
      b.innerText === "X" && k.innerText === "X" && h.innerText === "X" ||
      c.innerText === "X" && f.innerText === "X" && i.innerText === "X" ||

      a.innerText === "X" && k.innerText === "X" && i.innerText === "X" ||
      c.innerText === "X" && k.innerText === "X" && g.innerText === "X"
    ) {
        alert(" 🎮 thanks for played and  for follow 📝note point. 👇 press ok "

        );
        alert(`${firstUser} and ${secondUser} you both played well 🎉 👇 press ok to see result`);
      alert(`🎉🎉 ${firstUser} win 🎉🎉`);
    }
    else if( a.innerText === "O" && b.innerText === "O" && c.innerText === "O" ||
      d.innerText === "O" && k.innerText === "O" && f.innerText === "O" ||
      g.innerText === "O" && h.innerText === "O" && i.innerText === "O" ||

      a.innerText === "O" && d.innerText === "O" && g.innerText === "O" ||
      b.innerText === "O" && k.innerText === "O" && h.innerText === "O" ||
      c.innerText === "O" && f.innerText === "O" && i.innerText === "O" ||

      a.innerText === "O" && k.innerText === "O" && i.innerText === "O" ||
      c.innerText === "O" && k.innerText === "O" && g.innerText === "O"){
         alert("🎮 thanks for played and  for follow 📝note point. 👇 press ok "

        );
        alert(`${firstUser} and ${secondUser} you both played well 🎉 👇press ok to see result`);
        alert(`🎉🎉 ${secondUser} win 🎉 🎉`);
      };
  };
});


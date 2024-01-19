/*----------------------------------------
Обробка клавіш слайдеру (prev/next)
----------------------------------------*/
function slider(elemId) {
  // створюємо змінну для збереження видимого елемента
  let activeId;
  // отримуємо айді активного елемента слайдера як перший видимий child
  activeId = parseInt(document.getElementsByClassName("itemActive").item(0).id);

  document.getElementById(activeId).className = "item";
  document.getElementById(activeId).style.backgroundImage = 'url("../proj/img/slider/1.jpg")';

  if (elemId === "prev") { 
    activeId = (activeId === 1) ? 4 : activeId-1;
    document.getElementById(activeId).className = "itemActive";
    document.getElementById(activeId).style.backgroundImage = 'url("../proj/img/slider/'+activeId+'.jpg")';
  } else if (elemId === "next"){
    activeId = (activeId === 4) ? 1 : activeId+1;
    document.getElementById(activeId).className = "itemActive";
    document.getElementById(activeId).style.backgroundImage = 'url("../proj/img/slider/'+activeId+'.jpg")';
  }
}
const button = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const cuteGif = document.querySelector(".cute-gif2");
const cutegif = document.querySelector(".cute-gif");

cuteGif.style.display = "none";
btnYes.addEventListener("click", () => {
    window.location.href = "date.html";
  });
  

button.addEventListener("mouseover", function () {
    button.style.left = `${Math.ceil(Math.random() * 50)}%`;
    button.style.top = `${Math.ceil(Math.random() * 50)}%`;
  });
  

window.addEventListener("DOMContentLoaded", function () {
  var nameEntered = document.getElementById("nameEntered");
  var storedName = localStorage.getItem("userName");

  if (storedName) {
    nameEntered.innerHTML = `<h1 class="text-center text-uppercase pb-3">Eid Adha Mubarak, ${storedName}<span class="pt-5" style="font-size:100%;color:red;">♥</span></h1>`;
 
  } else {
    nameEntered.innerHTML = `<h1 class="text-center text-uppercase">Eid Adha Mubarak</h1>`;
  }
  const sound = document.getElementById("eidSound");
  document.body.addEventListener("click", function startSound() {
    sound.play();
    document.body.removeEventListener("click", startSound);
  });
});

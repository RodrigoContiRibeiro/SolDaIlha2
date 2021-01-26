// Wrap every letter in a span
let textWrapper = document.querySelectorAll(".ml7 .letters");
for (let i = 0; i < textWrapper.length; i++) {
  textWrapper[i].innerHTML = textWrapper[i].textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

let logo = document.querySelector(".logo");

let ul = document.querySelector(".navItems");
let li = ul.querySelectorAll("li");

let img = document.querySelector("#beachImg");

anime({
  targets: logo,
  translateX: 50,
  duration: 3000,
  easing: "easeOutExpo",
});
anime({
  targets: li,
  translateY: 20,
  duration: 3000,
  easing: "easeOutExpo",
});
anime({
  targets: img,
  translateX: -30,
  translateX: 30,
  duration: 3000,
  easing: "easeOutExpo",
});

anime
  .timeline({ loop: false, duration: 1000 })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 4000,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".stay",
    opacity: 1,
    translateY: 50,
    duration: 1000,
    easing: "easeOutExpo",
  });
  // ----------------END ANIMATIONS------------------

  // ----------------Nav DOM ------------------------

  let burger = document.querySelector('.burger')

  burger.addEventListener('click', (e)=>{
    if(e.target.nodeName == 'IMG'){
      ul.style.transform = 'translateY(30%)'
    }
  })
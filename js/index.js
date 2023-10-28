const faceButton = document.querySelector(".face-button");
const faceButton2 = document.querySelector(".face-button2");
const faceContainer = document.querySelector(".face-container");
const faceContainer2 = document.querySelector(".face-container2");
const containerCoords = document.querySelector(".container");
const containerCoords2 = document.querySelector(".container2");
const mouseCoords = containerCoords.getBoundingClientRect();

faceButton.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;

  TweenMax.to(faceButton, 0.3, {
    x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50,
    y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 50,
    ease: Power4.easeOut,
  });
});

faceButton.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;

  TweenMax.to(faceContainer, 0.3, {
    x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 25,
    y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 25,
    ease: Power4.easeOut,
  });
});
faceButton2.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX - containerCoords2.offsetLeft;
  const mouseY = e.pageY - containerCoords2.offsetTop;

  TweenMax.to(faceButton2, 0.3, {
    x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50,
    y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 50,
    ease: Power4.easeOut,
  });
});

faceButton2.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX - containerCoords2.offsetLeft;
  const mouseY = e.pageY - containerCoords2.offsetTop;

  TweenMax.to(faceContainer2, 0.3, {
    x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 25,
    y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 25,
    ease: Power4.easeOut,
  });
});

faceButton.addEventListener("mouseenter", function (e) {
  TweenMax.to(faceButton, 0.3, {
    scale: 0.975,
  });
});
faceButton2.addEventListener("mouseenter", function (e) {
  TweenMax.to(faceButton2, 0.3, {
    scale: 0.975,
  });
});

faceButton.addEventListener("mouseleave", function (e) {
  TweenMax.to(faceButton, 0.3, {
    x: 0,
    y: 0,
    scale: 1,
  });

  TweenMax.to(faceContainer, 0.3, {
    x: 0,
    y: 0,
    scale: 1,
  });
});
faceButton2.addEventListener("mouseleave", function (e) {
  TweenMax.to(faceButton2, 0.3, {
    x: 0,
    y: 0,
    scale: 1,
  });

  TweenMax.to(faceContainer2, 0.3, {
    x: 0,
    y: 0,
    scale: 1,
  });
});

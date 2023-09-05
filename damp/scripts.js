document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".container button",
    translateY: [-100, 0],
    opacity: [0, 1],
    delay: (el, i) => i * 100,
    easing: "easeOutElastic(1, .8)",
  });
});

import Typed from "typed.js";

export function initTyped() {
  const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  return typed;
}

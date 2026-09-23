const quiz = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");
const quizTrack = document.querySelector("#quiz-track");
const track = document.querySelector("#track");
const form = document.querySelector("#lead-form");
const note = document.querySelector("#form-note");
const noteText = document.querySelector("#form-note-text");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#site-nav");

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quiz);
  const score = Number(data.get("now")) + Number(data.get("time")) + Number(data.get("need"));
  const level = score <= 4 ? "Старт" : score <= 7 ? "Практика" : "Разбор";
  quizTrack.textContent = "«" + level + "»";
  quizResult.hidden = false;
  track.value = level;
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  noteText.textContent = data.get("name") + ", трек «" + data.get("track") + "», " + data.get("when") + ".";
  note.hidden = false;
  form.classList.add("is-sent");
});

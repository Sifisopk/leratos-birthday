const music = document.getElementById("bg-music");
const letter = document.getElementById("letter");

/* MUSIC */
function toggleMusic() {
  music.paused ? music.play() : music.pause();
}

/* LETTER */
function openLetter() {
  letter.style.display = "block";
}

/* PASSWORD */
function unlock() {
  const pass = document.getElementById("password").value.trim().toLowerCase();

  if (pass === "monkie") {
    document.getElementById("lock-screen").remove();
    document.getElementById("main-content").hidden = false;
    music.play();
  } else {
    alert("Wrong nickname 😜");
  }
}

function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

/* FLOATING HEARTS */
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "🥳";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

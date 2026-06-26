document.addEventListener("DOMContentLoaded", () => {
    header = document.getElementById("header");

  if (!sidebar) return;

  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      header.innerHTML = html;
    })
    .catch(err => {
      console.error("header読み込み失敗:", err);
    });
});
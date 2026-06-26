document.addEventListener("DOMContentLoaded", () => {
    sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  fetch("/sidebar.html")
    .then(res => res.text())
    .then(html => {
      sidebar.innerHTML = html;
    })
    .catch(err => {
      console.error("sidebar読み込み失敗:", err);
    });
});
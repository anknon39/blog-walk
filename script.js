document.addEventListener("DOMContentLoaded", () => {
  // 各記事の歩数（ここに追加していく）
  const steps = [
    8532,
    12000,
    6951
  ];

  // 合計
  const total = steps.reduce((sum, s) => sum + s, 0);

  // 表示
  document.getElementById("total").textContent =
    total.toLocaleString() + " 歩";
});
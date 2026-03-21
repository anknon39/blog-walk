document.addEventListener("DOMContentLoaded", () => {
  // 各記事の歩数（ここに追加していく）
  const steps = [
    26121,
    6951,
    20000,
    6300,
    6800,

  ];

  // 合計
  const total = steps.reduce((sum, s) => sum + s, 0);

  // 表示
  document.getElementById("total").textContent =
    total.toLocaleString() + " 歩";
});

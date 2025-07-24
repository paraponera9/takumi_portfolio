// モバイル用にクリック時に拡張などの効果を追加するなども可能
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(card.querySelector('h2').innerText + ' を選択しました');
  });
});

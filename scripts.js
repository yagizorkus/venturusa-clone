function toggleAnswer(id) {
  const answer = document.getElementById(`answer${id}`);
  const allAnswers = document.querySelectorAll('.answer');

  // Tıklanan cevabı aç veya kapat
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }

  // Diğer cevapları kapat
  allAnswers.forEach((item) => {
    if (item.id !== `answer${id}`) {
      item.style.display = "none";
    }
  });
}
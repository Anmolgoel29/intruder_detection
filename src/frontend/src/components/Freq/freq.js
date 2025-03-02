function toggleAnswer(questionId) {
    const answer = document.getElementById(`answer-${questionId}`);
    const icon = document.getElementById(`icon-${questionId}`);

    // Toggle visibility of the answer
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.innerHTML = '&#x25BC;';  // Change symbol to down arrow
    } else {
        answer.classList.add('hidden');
        icon.innerHTML = '&gt;';  // Change symbol to right arrow
    }
}
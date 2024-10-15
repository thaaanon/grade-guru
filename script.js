document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradeForm');
    const result = document.getElementById('result');
    const requiredGPA = document.getElementById('requiredGPA');
    const funnyMessage = document.getElementById('funnyMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentCGPA = parseFloat(document.getElementById('currentCGPA').value);
        const completedSemesters = parseInt(document.getElementById('completedSemesters').value);
        const remainingSemesters = parseInt(document.getElementById('remainingSemesters').value);
        const targetCGPA = parseFloat(document.getElementById('targetCGPA').value);

        const totalSemesters = completedSemesters + remainingSemesters;
        const requiredGPAValue = (targetCGPA * totalSemesters - currentCGPA * completedSemesters) / remainingSemesters;

        requiredGPA.textContent = `Required GPA for remaining semesters: ${requiredGPAValue.toFixed(2)}`;

        let funnyText = '';

        if (requiredGPAValue <= 0) {
            funnyText = "Whoa, time traveler! You've already nailed it. Maybe invent a flux capacitor next? ⚡🚗";
        } else if (requiredGPAValue > 10) {
            funnyText = "Um, unless you're planning to bribe the universe, you might want to adjust your target. 🌟🔍";
        } else if (requiredGPAValue > 9) {
            funnyText = "Better start a coffee IV drip and say goodbye to sunlight. You've got this! ☕💪";
        } else if (requiredGPAValue > 8) {
            funnyText = "Time to channel your inner nerd. Maybe try sleeping with textbooks under your pillow? 🤓📚";
        } else if (requiredGPAValue > 7) {
            funnyText = "Doable! Just remember: sleep is for the weak, and Netflix is your enemy. 😴🎬";
        } else if (requiredGPAValue > 6) {
            funnyText = "You're in the sweet spot! A little effort, and you'll be golden. Maybe cut back on the memes? 😅📱";
        } else {
            funnyText = "Piece of cake! You could probably achieve this GPA in your sleep. Nap time? 🍰😴";
        }

        funnyMessage.textContent = funnyText;
        result.classList.remove('hidden');
    });
});
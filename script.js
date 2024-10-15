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

        let funnyText = '';

        if (requiredGPAValue <= 0) {
            requiredGPA.textContent = `Congratulations! You've already achieved your target CGPA.`;
            funnyText = "Whoa, time traveler! You've already nailed it. Maybe invent a flux capacitor next? ⚡🚗";
        } else if (requiredGPAValue > 10) {
            requiredGPA.textContent = `Unfortunately, it's not possible to achieve your target CGPA.`;
            funnyText = "Houston, we have a problem! Your target is out of this world. 🚀 Time to recalibrate your cosmic expectations!";
        } else {
            requiredGPA.textContent = `Required GPA for remaining semesters: ${requiredGPAValue.toFixed(2)}`;
            
            if (requiredGPAValue > 9.5) {
                funnyText = "Better start a coffee IV drip and say goodbye to sunlight. You've got this! ☕💪";
            } else if (requiredGPAValue > 9) {
                funnyText = "Time to channel your inner Einstein. Maybe try growing your hair wild too? 🧠💡";
            } else if (requiredGPAValue > 8) {
                funnyText = "Looks like it's time to befriend your textbooks. Who needs a social life anyway? 📚🤓";
            } else if (requiredGPAValue > 7) {
                funnyText = "Doable! Just remember: sleep is for the weak, and memes can wait. 😴📱";
            } else if (requiredGPAValue > 6) {
                funnyText = "You're in the sweet spot! A little effort, and you'll be golden. Maybe cut back on the cat videos? 😺📺";
            } else {
                funnyText = "Piece of cake! You could probably achieve this GPA while juggling flaming torches. 🍰🔥";
            }
        }

        funnyMessage.textContent = funnyText;
        result.classList.remove('hidden');
    });
});

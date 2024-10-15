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
        } else {
            requiredGPA.textContent = `Required GPA for each remaining semester: ${requiredGPAValue.toFixed(2)}`;
            
            if (requiredGPAValue > 10) {
                funnyText = "Uh-oh! Unless you've got a time-turner or you're planning to bribe the universe, you might need to have a chat with your college dean. 😏 Maybe bring cookies? 🍪";
            } else if (requiredGPAValue > 9.5) {
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

        if (requiredGPAValue > 10) {
            funnyText += " P.S. Achieving a GPA over 10 isn't actually possible... unless you've unlocked some secret level of academia we don't know about! 🎓✨";
        }

        funnyMessage.textContent = funnyText;
        result.classList.remove('hidden');
    });
});

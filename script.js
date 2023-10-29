alert("WELCOME")
function calculateGrades() {
    var subjects = parseInt(document.getElementById("subjects").value);
    var students = parseInt(document.getElementById("students").value);
    var totalMarks, percentage, grade;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (var i = 1; i <= students; i++) {
        totalMarks = 0;
        for (var j = 1; j <= subjects; j++) {
            var marks = parseInt(prompt("Enter marks for Student " + i + ", Subject " + j));
            totalMarks += marks;
        }
        var average = totalMarks / subjects;
        percentage = (totalMarks / (subjects * 100)) * 100;

        if (percentage >=90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 50) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        var resultText = "Student " + i + " - Average Percentage: " + percentage.toFixed(2) + "% - Grade: " + grade;
        var resultParagraph = document.createElement("p");
        resultParagraph.textContent = resultText;
        resultDiv.appendChild(resultParagraph);
    }
}

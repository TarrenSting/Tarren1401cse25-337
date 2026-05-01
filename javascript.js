// ===== LOAD PROGRESS ON TOPICS PAGE =====
function loadProgress() {
    for (let i = 1; i <= 4; i++) {
        let progress = localStorage.getItem("lesson" + i + "Progress");

        if (progress) {
            document.getElementById("progress" + i).style.width = progress + "%";
            document.getElementById("progressText" + i).innerText = progress + "%";
        }
    }

    // Unlock lessons
    if (localStorage.getItem("lesson1") === "done") unlockLesson(2);
    if (localStorage.getItem("lesson2") === "done") unlockLesson(3);
    if (localStorage.getItem("lesson3") === "done") unlockLesson(4);
}

function unlockLesson(num) {
    document.getElementById("lesson" + num + "Btn").disabled = false;
    document.getElementById("lesson" + num + "Btn").innerText = "Start Lesson";
}

// ===== NAVIGATION =====
function goLesson1() { window.location.href = "lesson1.html"; }
function goLesson2() { window.location.href = "lesson2.html"; }
function goLesson3() { window.location.href = "lesson3.html"; }
function goLesson4() { window.location.href = "lesson4.html"; }

// ===== QUIZ SYSTEM =====
function submitQuiz(answers, lessonNum) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        let selected = document.querySelector('input[name="q' + (i+1) + '"]:checked');
        if (selected && selected.value === answers[i]) {
            score++;
        }
    }

    alert("Score: " + score + "/10");

    if (score >= 7) {
        alert("Passed! Lesson unlocked 🎉");

        localStorage.setItem("lesson" + lessonNum, "done");
        localStorage.setItem("lesson" + lessonNum + "Progress", "100");

        // XP
        let xp = parseInt(localStorage.getItem("xp")) || 0;
        xp += 10;
        localStorage.setItem("xp", xp);

        window.location.href = "topics.html";
    } else {
        alert("You need at least 7/10 to pass.");
    }
}
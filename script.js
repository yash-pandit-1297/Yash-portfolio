const roles = [
    "Python Developer",
    "Django Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);

    }
}

function deleteText() {

    if (charIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 500);
    }
}

typeText();
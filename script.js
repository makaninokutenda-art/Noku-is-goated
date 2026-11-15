
/* ==================================
   CHICHII PROPOSAL WEBSITE
   JAVASCRIPT
================================== */


/* ==================================
   PAGE NAVIGATION
================================== */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================
   OPENING THE ENVELOPE
================================== */

const envelope = document.getElementById("envelope");

const openLetterButton = document.getElementById("open-letter");

let envelopeOpened = false;

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    openLetterButton.textContent = "Opening your letter... 💗";

    setTimeout(() => {

        showPage("page2");

    }, 1500);

}

envelope.addEventListener("click", openEnvelope);

openLetterButton.addEventListener("click", openEnvelope);


/* ==================================
   PAGE 2 TO PAGE 3
================================== */

document.getElementById("next-page").addEventListener("click", () => {

    showPage("page3");

});


/* ==================================
   YES BUTTON ANIMATION
================================== */

const yesButton = document.getElementById("yes-button");

const thinkButton = document.getElementById("think-button");

const buttonArea = document.getElementById("button-area");

const yesMessage = document.getElementById("yes-message");

let alreadySaidYes = false;


thinkButton.addEventListener("click", () => {

    document.getElementById("proposal-note").textContent =
        "Take all the time you need, Chichiiiii. There's no rush. 💗";

});


yesButton.addEventListener("click", () => {

    if (alreadySaidYes) return;

    alreadySaidYes = true;

    thinkButton.style.display = "none";

    yesButton.textContent = "SHE SAID YES! 💗";

    yesButton.style.position = "absolute";

    yesButton.style.left = "50%";

    yesButton.style.top = "50%";

    yesButton.style.transform =
        "translate(-50%, -50%) scale(1.15)";

    document.getElementById("proposal-note").textContent =
        "WAITTT... DID SHE REALLY SAY YES?! 😭💗";


    // The YES button moves around the screen.

    const positions = [

        { left: "15%", top: "20%" },

        { left: "75%", top: "15%" },

        { left: "65%", top: "75%" },

        { left: "15%", top: "70%" },

        { left: "50%", top: "50%" }

    ];

    let step = 0;

    const movement = setInterval(() => {

        if (step < positions.length) {

            yesButton.style.left = positions[step].left;

            yesButton.style.top = positions[step].top;

            yesButton.style.transform =
                `translate(-50%, -50%) scale(${1.15 + step * 0.12})`;

            step++;

        } else {

            clearInterval(movement);

            finishCelebration();

        }

    }, 650);

});


/* ==================================
   FINAL YES CELEBRATION
================================== */

function finishCelebration() {

    yesButton.style.display = "none";

    yesMessage.classList.add("show");

    document.getElementById("proposal-note").textContent =
        "BEST. ANSWER. EVER. 💞";

    createConfetti();

    // Send email notification.

    sendNotification();

    // Move to the final page.

    setTimeout(() => {

        showPage("page4");

    }, 4500);

}


/* ==================================
   CONFETTI EFFECT
================================== */

function createConfetti() {

    const symbols = ["💗", "💕", "✨", "🌸", "💖", "♥"];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5500);

    }

}


/* ==================================
   EMAIL NOTIFICATION
================================== */

function sendNotification() {

    // PUT YOUR EMAIL ADDRESS HERE.

    const yourEmail = "YOUR_EMAIL@example.com";

    if (yourEmail === "YOUR_EMAIL@example.com") {

        console.log("Add your email address to activate notifications.");

        return;

    }

    fetch("https://formsubmit.co/ajax/" + encodeURIComponent(yourEmail), {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify({

            _subject: "CHICHII SAID YESSSS! 💗",

            message: "Chichii clicked YES on your proposal website! Congratulations! 💗"

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log("Notification response:", data);

    })

    .catch(error => {

        console.error("Notification error:", error);

    });

}


/* ==================================
   FLOATING HEARTS
================================== */

function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    const heartSymbols = ["♥", "♡", "💗", "💕"];

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 15000);

}


// Create hearts continuously.

setInterval(createFloatingHeart, 650);


/* ==================================
   WEBSITE READY
================================== */

console.log("Chichii's proposal website is ready! 💗");

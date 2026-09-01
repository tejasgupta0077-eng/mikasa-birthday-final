/* =========================================================
   FORCE WEBSITE TO START FROM TOP
   ========================================================= */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
/* =========================================================
   FOR MIKASA — COMPLETE FINAL JAVASCRIPT
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const finalMusic = new Audio("final-song.mp3");
finalMusic.volume = 0.35;
const enterButton = document.getElementById("enterButton");
const intro = document.getElementById("intro");

const discoverButton = document.getElementById("discoverButton");
const letter = document.getElementById("letter");

const envelope = document.getElementById("envelope");

const reasonButton = document.getElementById("reasonButton");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const reasonCounter = document.getElementById("reasonCounter");
const reasonCard = document.getElementById("reasonCard");

const miniLetters = document.querySelectorAll(".mini-letter");

const letterPopup = document.getElementById("letterPopup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const closeLetter = document.getElementById("closeLetter");

const secretHeart = document.getElementById("secretHeart");
const secretPopup = document.getElementById("secretPopup");
const secretClose = document.getElementById("secretClose");
const secretMessage = document.getElementById("secretMessage");
const unlockSurprise = document.getElementById("unlockSurprise");

const finalSurprise = document.getElementById("finalSurprise");
const cricketDream =
    document.getElementById("cricketDream");

const finalHint =
    document.getElementById("finalHint");
const fireworksCanvas =
    document.getElementById("fireworksCanvas");

const hitshotButton =
    document.getElementById("hitshotButton");

const cricketBall =
    document.getElementById("cricketBall");

const sixMessage =
    document.getElementById("sixMessage");


/* =========================================================
   BACKGROUND MUSIC
   ========================================================= */

let musicPlaying = false;

function startMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.25;

    backgroundMusic.play()
        .then(() => {

            musicPlaying = true;

            if (musicButton) {
                musicButton.textContent = "♫";
            }

        })
        .catch(() => {

            console.log("Music could not autoplay.");

        });

}


if (musicButton && backgroundMusic) {

    musicButton.addEventListener("click", () => {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicButton.textContent = "🔇";

        } else {

            backgroundMusic.play()
                .then(() => {

                    musicPlaying = true;
                    musicButton.textContent = "♫";

                })
                .catch(() => {

                    console.log("Music could not play.");

                });

        }

    });

}


/* =========================================================
   INTRO
   ========================================================= */

if (enterButton && intro) {

    enterButton.addEventListener("click", (event) => {

        event.preventDefault();

        /* Always start the actual website from the top */

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        intro.classList.add("hide");

        document.body.style.overflow = "auto";

        startMusic();

    });

}


/* =========================================================
   DISCOVER
   ========================================================= */

if (discoverButton && letter) {

    discoverButton.addEventListener("click", () => {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


/* =========================================================
   ENVELOPE
   ========================================================= */

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-content, .story-card, .cricket-dream-card, .cricket-mini-game"
);

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "movie-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}


/* =========================================================
   20 REASONS
   ========================================================= */

const reasons = [

    "You actually listen to me, even when my explanation has 47 unnecessary side quests. 😂",

    "That first Snapchat video call. It was muted, I was nervous, and apparently my solution was to test every funny filter known to humanity. 😭",

    "Your attitude. Sometimes I wonder whether I'm talking to my girlfriend or the CEO of the universe. 👑",

    "You somehow make normal conversations interesting. We can start with something completely random and somehow end up talking about everything.",

    "You tolerate my nonsense. Honestly, this deserves its own award. 🏆",

    "You remember the little things. Things I casually mention somehow don't disappear from your memory like they do from mine.",

    "You can make me laugh without even trying. And occasionally you make me laugh at the situation rather than with you. 😂",

    "You have your own personality. You're not trying to be a copy of anyone else.",

    "You know how to handle me. Which is impressive because sometimes even I don't know what I'm doing. 💀",

    "You make me look forward to talking to you. Five minutes somehow becomes two hours.",

    "You make ordinary moments memorable.",

    "You've seen my awkward side and stayed anyway. Especially after that legendary filter-filled video call. 😂",

    "You have that combination of attitude + cuteness. Dangerous combination. There should probably be a warning label.",

    "You don't just hear me — you listen.",

    "You're unpredictable. I never know whether the next message will make me smile, laugh, or question everything. 😭",

    "You've become part of my everyday thoughts.",

    "You make me want to put effort into things. Like spending hours making a whole website instead of just typing Happy Birthday. 😂",

    "You're uniquely you.",

    "You make me feel heard. That's something I genuinely appreciate.",

    "And the biggest reason... somewhere along the way, you became someone genuinely important to me. ❤️"

];


let currentReason = 0;

if (
    reasonButton &&
    reasonText &&
    reasonNumber &&
    reasonCounter &&
    reasonCard
) {

    reasonButton.addEventListener("click", () => {

        if (currentReason >= reasons.length) return;

        reasonCard.classList.remove("change");

        void reasonCard.offsetWidth;

        reasonText.textContent =
            reasons[currentReason];

        reasonNumber.textContent =
            String(currentReason + 1).padStart(2, "0");

        reasonCounter.textContent =
            `${currentReason + 1} / ${reasons.length}`;

        reasonCard.classList.add("change");

        currentReason++;

        if (currentReason === reasons.length) {

            reasonButton.textContent =
                "You found them all ♡";

            setTimeout(showStorageMessage, 900);

        }

    });

}


/* =========================================================
   STORAGE MESSAGE
   ========================================================= */

function showStorageMessage() {

    if (document.querySelector(".storage-message")) return;

    const storageMessage =
        document.createElement("div");

    storageMessage.className =
        "storage-message";

    storageMessage.innerHTML = `

        <div class="storage-box">

            <div class="error-icon">⚠️</div>

            <p class="error-small">
                UNEXPECTED PROBLEM DETECTED
            </p>

            <h4>
                Developer ran out<br>
                of storage. 💀
            </h4>

            <p>
                Unfortunately, there are still
                approximately 700 reasons left.
            </p>

            <button id="continueButton">
                Continue anyway ♡
            </button>

        </div>

    `;

    document.body.appendChild(storageMessage);

    const continueButton =
        document.getElementById("continueButton");

    if (continueButton) {

        continueButton.addEventListener("click", () => {

            storageMessage.remove();

            const openWhen =
                document.getElementById("openWhen");

            if (openWhen) {

                openWhen.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

}


/* =========================================================
   OPEN WHEN LETTERS
   ========================================================= */

const personalLetters = [

    {
        title: "Open when you're sad",

        message: `Agar tum ye letter khol rahi ho, toh pehle ek kaam karo — thoda relax karo. 🫶

Mujhe nahi pata aaj kya hua hai, but har baar strong rehna bhi zaroori nahi hota.

Aur haan, agar koi tumhara mood kharab kar raha hai na, toh naam bata dena...

Main kuch nahi karunga, bas mentally usko 47 baar judge karunga. 😂

Seriously though, tum jitna sochti ho usse zyada achhi ho.

Bas aaj thoda smile kar lena.

Take care, Mikasa. ❤️`
    },

    {
        title: "Open when you miss me",

        message: `Waise mujhe pata hai tum mujhe miss nahi karogi... 😌

Lekin agar thoda sa bhi miss kar rahi ho toh ye letter khol hi liya hai. 😂

Kabhi kabhi sochta hoon, agar maine tumhe Attack on Titan suggest hi nahi kiya hota toh shayad tum mujhe Eren bhi na bulati. 😭

Aur phir tumne mera nickname Eren rakh diya...

Recommendation dene gaya tha, apni identity change karwa ke aa gaya. 😂

Random conversations, stupid jokes, nicknames aur chhoti chhoti baatein hi toh memories ban jaati hain.

Miss karna allowed hai.

Bas zyada attitude mat dikhana. 😌😂

— Eren ❤️`
    },

    {
        title: "Open when you're overthinking",

        message: `Okay madam, sabse pehle...

STOP. 😂

Har chhoti si baat ko 17 different possibilities mein analyse karna band karo.

Har thought sach nahi hota.

Agar koi baat bother kar rahi hai, calmly sochna.

Aur agar phir bhi samajh na aaye...

mujhe bata dena.

Main perfect solution na de paun, but at least tumhare saath baith ke us problem ko unnecessarily complicated zaroor bana dunga. 😂

So breathe, relax...

aur thoda sa apne brain ko chhutti de do. ❤️`
    },

    {
        title: "Open when you need motivation",

        message: `Tumhe har din perfect hona zaroori nahi hai.

Kabhi motivation hogi, kabhi nahi hogi.

But even on those days, thoda sa kar lena.

Ek small step bhi step hi hota hai.

Aur haan, main motivational speaker banne ki koshish kar raha hoon, isliye meri izzat rakh lena. 😂

Seriously though, mujhe pata hai tum kar sakti ho.

Bas khud par thoda trust rakho. ❤️`
    },

    {
        title: "Open when you need a laugh",

        message: `Congratulations. 🎉

Tumne successfully woh letter open kar liya jo supposedly tumhara mood better karne wala hai.

Problem ye hai ki writer khud comedian nahi hai. 😂

Toh chalo ek memory yaad karte hain...

Hamari first Snapchat video call.

Call muted thi.

Main nervous tha.

Aur meri brilliant strategy?

Different different funny filters try karna. 😂

Honestly, mujhe nahi pata us din tumne mujhe seriously liya bhi tha ya nahi.

But somehow...

you stayed.

Mission successful. ❤️`
    },

    {
        title: "Open when you wonder if you're special",

        message: `Agar kabhi tumhe lage ki "main actually special hoon kya?"

Answer simple hai.

Haan. ❤️

Tumhari personality, tumhara attitude, tumhare random jokes — ye sab tumhe tum banata hai.

Aur shayad isi liye maine ye poori website banayi.

Sirf Happy Birthday likh ke kaam khatam karna thoda boring laga.

Mujhe kuch aisa banana tha jisme thoda mera time lage, thoda effort lage aur thoda sa pagalpan ho. 😂

Someone literally made an entire website for you.

Ab isse zyada proof chahiye toh developer ka budget already khatam ho chuka hai. 😂❤️`
    }

];


let typingTimer = null;

miniLetters.forEach((card, index) => {

    card.addEventListener("click", () => {

        const data =
            personalLetters[index];

        if (!data || !letterPopup) return;

        popupTitle.textContent =
            data.title;

        popupMessage.textContent =
            "";

        letterPopup.classList.add("show");

        if (typingTimer) {

            clearInterval(typingTimer);

        }

        let character = 0;

        typingTimer =
            setInterval(() => {

                popupMessage.textContent +=
                    data.message[character];

                character++;

                if (
                    character >=
                    data.message.length
                ) {

                    clearInterval(
                        typingTimer
                    );

                    typingTimer = null;

                }

            }, 8);

    });

});


/* =========================================================
   CLOSE LETTER
   ========================================================= */

if (closeLetter && letterPopup) {

    closeLetter.addEventListener("click", () => {

        letterPopup.classList.remove("show");

        if (typingTimer) {

            clearInterval(typingTimer);

            typingTimer = null;

        }

    });


    letterPopup.addEventListener("click", (event) => {

        if (event.target === letterPopup) {

            letterPopup.classList.remove("show");

        }

    });

}


/* =========================================================
   SECRET HEART
   ========================================================= */

let secretClicks = 0;

if (secretHeart) {

    secretHeart.addEventListener("click", () => {

        secretClicks++;

        secretHeart.style.transform =
            "scale(1.3)";

        setTimeout(() => {

            secretHeart.style.transform = "";

        }, 150);


        if (
            secretClicks >= 5 &&
            secretPopup
        ) {

            if (secretMessage) {

                secretMessage.textContent =
                    "You actually found it. 😭😂 I was hoping you'd notice this tiny heart. Apparently you're more observant than I expected. ❤️";

            }

            secretPopup.classList.add("show");

        }

    });

}


/* =========================================================
   SECRET POPUP CLOSE
   ========================================================= */

if (secretClose && secretPopup) {

    secretClose.addEventListener("click", () => {

        secretPopup.classList.remove("show");

    });


    secretPopup.addEventListener("click", (event) => {

        if (event.target === secretPopup) {

            secretPopup.classList.remove("show");

        }

    });

}


/* =========================================================
   CRICKET GAME
   ========================================================= */

/*
   IMPORTANT:
   Ball movement is handled using JavaScript animation
   instead of relying only on CSS transforms.
*/

if (hitshotButton && cricketBall) {

    hitshotButton.addEventListener("click", hitCricketBall);

}


function hitCricketBall() {

    /* Prevent multiple clicks during shot */

    if (cricketBall.dataset.moving === "true") {
        return;
    }

    cricketBall.dataset.moving = "true";


    /* Reset message */

    if (sixMessage) {

        sixMessage.classList.remove(
            "show-six"
        );

    }


    /* Reset ball */

    cricketBall.style.transition =
        "none";

    cricketBall.style.transform =
        "translate(0px, 0px) rotate(0deg) scale(1)";

    cricketBall.style.opacity =
        "1";

    cricketBall.style.position =
        "relative";

    cricketBall.style.zIndex =
        "9999";


    /* Force browser to apply reset */

    void cricketBall.offsetWidth;


    /* Button text */

    hitshotButton.textContent =
        "SHOT!!! 🔥";


    /* Vibrate phone */

    if (navigator.vibrate) {

        navigator.vibrate(100);

    }


    /* Confetti */

    createCricketConfetti();


    /*
       ACTUAL BALL MOVEMENT
       --------------------
       Starts at 0
       Goes slightly up
       Then flies diagonally upward
       Then fades away
    */

    const animation =
        cricketBall.animate(

            [

                {
                    transform:
                        "translate(0px, 0px) rotate(0deg) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        "translate(35px, -35px) rotate(90deg) scale(1.15)",

                    opacity: 1
                },

                {
                    transform:
                        "translate(120px, -130px) rotate(260deg) scale(1.05)",

                    opacity: 1
                },

                {
                    transform:
                        "translate(230px, -230px) rotate(500deg) scale(.8)",

                    opacity: .75
                },

                {
                    transform:
                        "translate(360px, -340px) rotate(720deg) scale(.45)",

                    opacity: 0
                }

            ],

            {
                duration: 1100,

                easing:
                    "cubic-bezier(.18,.8,.25,1)",

                fill:
                    "forwards"
            }

        );


    /* When ball reaches six */

    animation.onfinish = () => {

        cricketBall.style.opacity =
            "0";


        if (sixMessage) {

            sixMessage.classList.add(
                "show-six"
            );

        }


        hitshotButton.textContent =
            "THAT'S A SIX! 🔥";


        /*
           After a little while,
           put ball back at starting point.
        */

        setTimeout(() => {

            cricketBall.style.transform =
                "translate(0px, 0px) rotate(0deg) scale(1)";

            cricketBall.style.opacity =
                "1";

            cricketBall.dataset.moving =
                "false";

        }, 1400);


        setTimeout(() => {

            hitshotButton.textContent =
                "HIT THE SHOT 🏏";

        }, 2200);

    };

}


/* =========================================================
   CRICKET CONFETTI
   ========================================================= */

function createCricketConfetti() {

    const colors = [

        "#ff4d6d",
        "#ffd166",
        "#7b2cbf",
        "#00b4d8",
        "#ffffff"

    ];


    for (let i = 0; i < 25; i++) {

        const confetti =
            document.createElement("div");


        confetti.style.position =
            "fixed";

        confetti.style.left =
            "50%";

        confetti.style.top =
            "55%";

        confetti.style.width =
            "7px";

        confetti.style.height =
            "7px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.borderRadius =
            "2px";

        confetti.style.pointerEvents =
            "none";

        confetti.style.zIndex =
            "999999";


        document.body.appendChild(
            confetti
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            220;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        confetti.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(720deg)`,

                    opacity: 0
                }

            ],

            {

                duration:
                    1000 +
                    Math.random() *
                    700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(() => {

            confetti.remove();

        }, 1800);

    }

}


/* =========================================================
   FIREWORKS
   ========================================================= */

let fireworksStarted = false;

let fireworksTimer = null;

let fireworksAnimation = null;


function startFireworks() {

    if (!fireworksCanvas) {

        console.log(
            "Fireworks canvas not found."
        );

        return;

    }


    if (!finalSurprise) return;


    if (fireworksStarted) return;

    fireworksStarted = true;


    const canvas =
        fireworksCanvas;

    const ctx =
        canvas.getContext("2d");


    if (!ctx) return;


    canvas.style.position =
        "absolute";

    canvas.style.inset =
        "0";

    canvas.style.width =
        "100%";

    canvas.style.height =
        "100%";

    canvas.style.pointerEvents =
        "none";

    canvas.style.zIndex =
        "2";


    function resizeCanvas() {

        canvas.width =
            Math.max(
                finalSurprise.clientWidth,
                window.innerWidth
            );

        canvas.height =
            Math.max(
                finalSurprise.clientHeight,
                window.innerHeight
            );

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    const rockets = [];

    const particles = [];


    function random(min, max) {

        return Math.random() *
            (max - min) +
            min;

    }


    function createFirework() {

        const x =
            random(
                canvas.width * 0.12,
                canvas.width * 0.88
            );


        const targetY =
            random(
                canvas.height * 0.12,
                canvas.height * 0.52
            );


        rockets.push({

            x:
                canvas.width / 2 +
                random(
                    -canvas.width * .35,
                    canvas.width * .35
                ),

            y:
                canvas.height + 20,

            targetX:
                x,

            targetY:
                targetY,

            speed:
                random(7, 11),

            hue:
                random(0, 360)

        });

    }


    function explode(x, y, hue) {

        const count = 75;


        for (let i = 0; i < count; i++) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                random(1.5, 6.5);


            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life: 1,

                decay:
                    random(.012, .024),

                size:
                    random(1.5, 3.5),

                hue:
                    hue +
                    random(-30, 30)

            });

        }

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        if (Math.random() < 0.055) {

            createFirework();

        }


        for (
            let i = rockets.length - 1;
            i >= 0;
            i--
        ) {

            const rocket =
                rockets[i];


            const dx =
                rocket.targetX -
                rocket.x;


            const dy =
                rocket.targetY -
                rocket.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 12) {

                explode(
                    rocket.targetX,
                    rocket.targetY,
                    rocket.hue
                );


                rockets.splice(i, 1);

                continue;

            }


            const angle =
                Math.atan2(
                    dy,
                    dx
                );


            rocket.x +=
                Math.cos(angle) *
                rocket.speed;


            rocket.y +=
                Math.sin(angle) *
                rocket.speed;


            ctx.beginPath();


            ctx.arc(
                rocket.x,
                rocket.y,
                2.5,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                "#ffffff";


            ctx.shadowBlur =
                12;


            ctx.shadowColor =
                `hsl(${rocket.hue},100%,70%)`;


            ctx.fill();


            ctx.shadowBlur =
                0;

        }


        for (
            let i = particles.length - 1;
            i >= 0;
            i--
        ) {

            const particle =
                particles[i];


            particle.x +=
                particle.vx;


            particle.y +=
                particle.vy;


            particle.vy +=
                0.045;


            particle.vx *=
                0.985;


            particle.vy *=
                0.985;


            particle.life -=
                particle.decay;


            if (particle.life <= 0) {

                particles.splice(i, 1);

                continue;

            }


            ctx.save();


            ctx.globalAlpha =
                particle.life;


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `hsl(${particle.hue},100%,70%)`;


            ctx.shadowBlur =
                8;


            ctx.shadowColor =
                `hsl(${particle.hue},100%,70%)`;


            ctx.fill();


            ctx.restore();

        }


        fireworksAnimation =
            requestAnimationFrame(
                animate
            );

    }


    for (let i = 0; i < 7; i++) {

        setTimeout(() => {

            createFirework();

        }, i * 280);

    }


    fireworksTimer =
        setInterval(() => {

            createFirework();

        }, 850);


    animate();

}


/* =========================================================
   FINAL SURPRISE
   ========================================================= */

if (
    unlockSurprise &&
    finalSurprise
) {

    unlockSurprise.addEventListener(
        "click",
        () => {

            if (secretPopup) {

                secretPopup.classList.remove(
                    "show"
                );

            }


            finalSurprise.classList.add(
                "show"
            );
            /* Hide everything that came before the final surprise */

if (cricketDream) {
    cricketDream.style.display = "none";
}

if (finalHint) {
    finalHint.style.display = "none";
}
// Switch to the final surprise music
if (backgroundMusic) {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

finalMusic.currentTime = 0;

finalMusic.play().catch(() => {
    console.log("Final music could not play.");
});

            setTimeout(() => {

                finalSurprise.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);


            setTimeout(() => {

                startFireworks();

            }, 250);

        }
    );

}setTimeout(() => {

    startCinematicEnding();

}, 9000);


/* =========================================================
   MYSTERY BOXES
   ========================================================= */

const mysteryBoxes =
    document.querySelectorAll(
        ".mystery-box"
    );


const mysteryPopup =
    document.getElementById(
        "mysteryPopup"
    );


const closeMystery =
    document.getElementById(
        "closeMystery"
    );


const mysteryPopupIcon =
    document.getElementById(
        "mysteryPopupIcon"
    );


const mysteryPopupLabel =
    document.getElementById(
        "mysteryPopupLabel"
    );


const mysteryPopupTitle =
    document.getElementById(
        "mysteryPopupTitle"
    );


const mysteryPopupMessage =
    document.getElementById(
        "mysteryPopupMessage"
    );


const mysteryPopupButton =
    document.getElementById(
        "mysteryPopupButton"
    );


/* =========================================================
   MYSTERY CSS
   ========================================================= */

const mysteryStyle =
    document.createElement("style");


mysteryStyle.textContent = `

.mystery-popup-box {

    max-height: 88vh;

    overflow-y: auto;

    -webkit-overflow-scrolling: touch;

    scrollbar-width: thin;

}

#mysteryPopupMessage {

    white-space: normal !important;

    overflow-wrap: break-word;

}


/* Challenge */

.challenge-game {

    width: 100%;

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 14px;

    flex-wrap: nowrap;

    margin: 24px auto 5px;

    position: relative;

    z-index: 100000;

}


.challenge-heart {

    width: 68px;

    height: 68px;

    min-width: 68px;

    min-height: 68px;

    border-radius: 50%;

    border: 2px solid rgba(255,142,174,.75);

    background:
        radial-gradient(
            circle at 35% 30%,
            rgba(255,180,205,.20),
            rgba(255,80,130,.10)
        );

    color: #ff9fbd;

    font-size: 34px;

    line-height: 1;

    display: flex;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    touch-action: manipulation;

    -webkit-tap-highlight-color: transparent;

    box-shadow:
        0 0 18px rgba(255,80,130,.20),
        inset 0 0 15px rgba(255,255,255,.04);

}


.challenge-heart:active {

    transform: scale(.88);

}


.challenge-heart.wrong {

    opacity: .35;

    transform: scale(.9);

    cursor: default;

}


.challenge-heart.correct {

    background:
        rgba(255,80,130,.35);

    box-shadow:
        0 0 35px rgba(255,80,130,.60);

    transform: scale(1.15);

}


.win-message {

    animation:
        winAppear .6s ease both;

}


@keyframes winAppear {

    from {

        opacity: 0;

        transform:
            translateY(12px)
            scale(.96);

    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);

    }

}


.prize-title {

    text-align: center;

    font-size: 18px;

    font-weight: 700;

    color: #ffb6cb;

    margin: 20px 0 13px;

    letter-spacing: 1.5px;

}


.prize-icons {

    display: flex;

    justify-content: center;

    align-items: stretch;

    gap: 16px;

    margin: 15px auto 22px;

    flex-wrap: wrap;

}


.prize-item {

    width: 125px;

    padding: 14px 9px;

    text-align: center;

    border-radius: 20px;

    background:
        linear-gradient(
            145deg,
            rgba(255,105,145,.15),
            rgba(255,255,255,.05)
        );

    border:
        1px solid
        rgba(255,150,180,.35);

}


.prize-icon {

    width: 65px;

    height: 65px;

    margin: 0 auto 9px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    font-size: 37px;

}


.prize-label {

    display: block;

    font-size: 14px;

    font-weight: 700;

    color:
        rgba(255,255,255,.92);

}


.next-day-message {

    display: inline-block;

    margin: 5px auto;

    padding: 9px 14px;

    border-radius: 14px;

    color: #ffb1c7;

    background:
        rgba(255,80,130,.10);

    border:
        1px solid
        rgba(255,120,160,.28);

    font-weight: 600;

}


.watch-reveal {

    position: relative;

    margin: 5px auto 20px;

    padding: 18px 10px 12px;

    text-align: center;

    overflow: hidden;

}


.watch-glow {

    position: absolute;

    width: 150px;

    height: 150px;

    left: 50%;

    top: 45%;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255,120,160,.22),
            transparent 68%
        );

    filter: blur(4px);

    pointer-events: none;

}


.watch-icon {

    position: relative;

    z-index: 2;

    width: 105px;

    height: 105px;

    margin: 0 auto 18px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    font-size: 65px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.12),
            rgba(255,90,140,.10)
        );

    border:
        1px solid
        rgba(255,180,200,.45);

}


.watch-caption {

    position: relative;

    z-index: 5;

    margin: 0;

    color:
        rgba(255,255,255,.70);

    font-size: 12px;

    letter-spacing: 2px;

    text-transform: uppercase;

}


@media (max-width: 600px) {

    .mystery-popup {

        padding: 12px;

    }

    .mystery-popup-box {

        width: 100%;

        max-width: 420px;

        max-height: 90vh;

        padding:
            38px 18px 28px;

    }

    .challenge-game {

        gap: 9px;

        margin-top: 20px;

    }

    .challenge-heart {

        width: 61px;

        height: 61px;

        min-width: 61px;

        min-height: 61px;

        font-size: 30px;

    }

    .prize-item {

        width: 112px;

    }

    .watch-icon {

        width: 90px;

        height: 90px;

        font-size: 55px;

    }

}

`;

document.head.appendChild(
    mysteryStyle
);


/* =========================================================
   TINY MESSAGE
   ========================================================= */

const tinyMessage = `Hello Shivanshi ❤️

Vaise toh main apni feelings ko words mein properly describe nahi kar sakta…
but phir bhi aaj try kar raha hoon. 🫶

Main tumse bahut hi zyada pyaar karta hoon. ❤️
Tum mujhe bahut pyaari lagti ho.

Tumhare liye jo mujhse hoga,
main hamesha genuinely karne ki koshish karunga.

Bas chand-taare tod ke laane wali bakchodi nahi karunga. 😂🌙⭐

Main tumhari wishes ka,
tumhare mood swings ka,
aur agar kabhi meri kisi baat se tum hurt ho jao
toh uska khayal rakhne ki poori koshish karunga. 🫶

Aur agar tum apna future mere saath imagine karti ho…
toh main bhi poori honesty ke saath
is relationship ko beautiful banane ki koshish karunga. ❤️

Mujhe pata hai 12th ke baad
shayad hum dono alag-alag directions mein chale jaayenge.
Life change hogi, distance aa sakta hai… 🥹

Lekin agar feelings sachchi hain,
toh distance feelings ko khatam karne ki wajah nahi hota. ❤️

Bas ek cheez yaad rakhna…

You are genuinely very special to me. ❤️

— Your Eren (Tejas) ♡`;


/* =========================================================
   MYSTERY BOX CLICK
   ========================================================= */

if (
    mysteryBoxes.length &&
    mysteryPopup
) {

    mysteryBoxes.forEach((box) => {

        box.addEventListener("click", () => {

            const index =
                Number(
                    box.dataset.mystery
                );


            const oldGame =
                document.querySelector(
                    ".challenge-game"
                );


            if (oldGame) {

                oldGame.remove();

            }


            if (index === 0) {

                mysteryPopupIcon.textContent =
                    "🎁";

                mysteryPopupLabel.textContent =
                    "✦ A TINY MESSAGE ✦";

                mysteryPopupTitle.textContent =
                    "Just for you... ❤️";

                mysteryPopupMessage.textContent =
                    tinyMessage;

                mysteryPopupButton.textContent =
                    "Keep it safe ♡";

                mysteryPopupButton.style.display =
                    "inline-flex";

                mysteryPopupButton.onclick =
                    closeMysteryPopup;

                mysteryPopup.classList.add(
                    "show"
                );

            }


            else if (index === 1) {

                startMysteryChallenge();

            }


            else if (index === 2) {

                showWatchReveal();

            }

        });

    });

}


/* =========================================================
   LITTLE CHALLENGE
   ========================================================= */

function startMysteryChallenge() {

    if (!mysteryPopup) return;


    mysteryPopupIcon.textContent =
        "✨";


    mysteryPopupLabel.textContent =
        "✦ A LITTLE CHALLENGE ✦";


    mysteryPopupTitle.textContent =
        "Find the lucky heart... 👀";


    mysteryPopupMessage.textContent =
`Okay madam 😂❤️

Teen hearts hain...

Sirf ONE heart lucky hai. ✨

Lucky heart choose karo
aur dekho kya milta hai. 👀

Good luck! 🫶`;


    mysteryPopupButton.style.display =
        "none";


    const game =
        document.createElement("div");


    game.className =
        "challenge-game";


    game.id =
        "mysteryChallengeGame";


    const lucky =
        Math.floor(
            Math.random() * 3
        );


    for (let i = 0; i < 3; i++) {

        const heart =
            document.createElement("button");


        heart.type =
            "button";


        heart.className =
            "challenge-heart";


        heart.textContent =
            "♡";


        heart.setAttribute(
            "aria-label",
            "Choose this heart"
        );


        heart.addEventListener(
            "click",
            () => {

                if (heart.disabled) {
                    return;
                }


                if (i !== lucky) {

                    heart.textContent =
                        "💔";

                    heart.disabled =
                        true;

                    heart.classList.add(
                        "wrong"
                    );


                    mysteryPopupMessage.textContent =
`Awww... wrong one 😂💔

But don't worry...

Baaki hearts mein se
ek abhi bhi lucky hai. 👀✨

Try again! ❤️`;

                    return;

                }


                heart.textContent =
                    "💖";


                heart.disabled =
                    true;


                heart.classList.add(
                    "correct"
                );


                if (navigator.vibrate) {

                    navigator.vibrate(70);

                }


                setTimeout(
                    showChallengeWin,
                    550
                );

            }
        );


        game.appendChild(
            heart
        );

    }


    mysteryPopupMessage.parentNode.insertBefore(
        game,
        mysteryPopupMessage.nextSibling
    );


    mysteryPopup.classList.add(
        "show"
    );

}


/* =========================================================
   CHALLENGE WIN
   ========================================================= */

function showChallengeWin() {

    const game =
        document.getElementById(
            "mysteryChallengeGame"
        );


    if (game) {

        game.remove();

    }


    mysteryPopupIcon.textContent =
        "🎉";


    mysteryPopupLabel.textContent =
        "✦ YOU WON ✦";


    mysteryPopupTitle.textContent =
        "YOU ACTUALLY WON! 🎊";


    mysteryPopupMessage.innerHTML = `

        <div class="win-message">

            <p>
                Congratulations Mikasa! 😂❤️
            </p>

            <p>
                You found the lucky heart! 💖✨
            </p>

            <p class="prize-title">
                ✦ YOUR PRIZE ✦
            </p>

            <div class="prize-icons">

                <div class="prize-item">

                    <div class="prize-icon">
                        🍫
                    </div>

                    <span class="prize-label">
                        Chocolates
                    </span>

                </div>

                <div class="prize-item">

                    <div class="prize-icon">
                        🧣
                    </div>

                    <span class="prize-label">
                        Scarf
                    </span>

                </div>

            </div>

            <p>
                But there's one little problem... 😂
            </p>

            <p>
                Your birthday is on Sunday,
                so you won't get them that day. 🥹
            </p>

            <p>
                Don't worry... ❤️
            </p>

            <p>
                <span class="next-day-message">
                    🎁 You will receive them on the next day
                    at school. ❤️
                </span>
            </p>

            <p>
                Your prize is already waiting for you. 😂❤️
            </p>

        </div>

    `;


    mysteryPopupButton.style.display =
        "inline-flex";


    mysteryPopupButton.textContent =
        "YAY! I WON! ♡";


    mysteryPopupButton.onclick =
        closeMysteryPopup;


    createMysteryConfetti();

}


/* =========================================================
   WATCH REVEAL
   ========================================================= */

function showWatchReveal() {

    const oldGame =
        document.querySelector(
            ".challenge-game"
        );


    if (oldGame) {

        oldGame.remove();

    }


    mysteryPopupIcon.textContent =
        "✨";


    mysteryPopupLabel.textContent =
        "✦ THE REAL SURPRISE ✦";


    mysteryPopupTitle.textContent =
        "Wait... this one is actually for you. ❤️";


    mysteryPopupMessage.innerHTML = `

        <div class="watch-reveal">

            <div class="watch-glow"></div>

            <div class="watch-icon">
                ⌚
            </div>

            <p class="watch-caption">
                something special, just for you ♡
            </p>

        </div>

        <p>
            Okay... now the actual surprise. 🥹❤️
        </p>

        <p>
            I got you a watch. ⌚✨
        </p>

        <p>
            I wanted to give you something
            that you could actually keep with you.
        </p>

        <p>
            Whenever you wear it,
            I hope it reminds you of this birthday,
            this little website,
            and all the memories we've made. ❤️
        </p>

        <p>
            Happy Birthday, Mikasa. 🎂❤️
        </p>

        <p>
            — Your Eren (Tejas) ♡
        </p>

    `;


    mysteryPopupButton.style.display =
        "inline-flex";


    mysteryPopupButton.textContent =
        "This is so sweet ♡";


    mysteryPopupButton.onclick =
        closeMysteryPopup;


    mysteryPopup.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE MYSTERY
   ========================================================= */

function closeMysteryPopup() {

    if (!mysteryPopup) return;


    mysteryPopup.classList.remove(
        "show"
    );


    const game =
        document.querySelector(
            ".challenge-game"
        );


    if (game) {

        game.remove();

    }


    mysteryPopupButton.style.display =
        "inline-flex";

}


if (closeMystery && mysteryPopup) {

    closeMystery.addEventListener(
        "click",
        closeMysteryPopup
    );


    mysteryPopup.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                mysteryPopup
            ) {

                closeMysteryPopup();

            }

        }
    );

}


/* =========================================================
   MYSTERY CONFETTI
   ========================================================= */

function createMysteryConfetti() {

    const symbols = [
        "✨",
        "🎉",
        "💖",
        "🎊",
        "⭐"
    ];


    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("div");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.fontSize =
            "20px";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "999999";


        document.body.appendChild(
            particle
        );


        const x =
            (Math.random() - .5) *
            500;


        const y =
            (Math.random() - .5) *
            500;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.4)`,

                    opacity: 0
                }

            ],

            {

                duration:
                    1200 +
                    Math.random() *
                    700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(() => {

            particle.remove();

        }, 2000);

    }

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !==
            "Escape"
        ) return;


        if (mysteryPopup) {

            closeMysteryPopup();

        }

    }
);


/* =========================================================
   DONE
   ========================================================= */

console.log(
    "🎁 For Mikasa website loaded successfully."
);

console.log(
    "🏏 Cricket SIX animation loaded successfully."
);

console.log(
    "💖 Mystery boxes loaded successfully."
)/* ================= CINEMATIC REVEAL ================= */

function startCinematicEnding() {

    if (!finalSurprise) return;

    finalSurprise.classList.add("cinematic-active");

    const finalContent =
        document.querySelector(".final-content");

    if (!finalContent) return;

    // Prevent duplicate reveal
    if (document.getElementById("cinematicEnding")) {
        return;
    }

    const ending =
        document.createElement("div");

    ending.id =
        "cinematicEnding";

    ending.className =
        "cinematic-ending";

    ending.innerHTML = `

        <p class="cinematic-the-end">
            The End...
        </p>

        <p class="cinematic-beginning">
            ...or maybe just
            <span>the beginning.</span> ♡
        </p>

    `;

    finalContent.appendChild(ending);

    // Reveal smoothly
    setTimeout(() => {

        ending.classList.add("show");

    }, 500);

}


/* Start cinematic reveal after fireworks */

if (unlockSurprise) {

    unlockSurprise.addEventListener("click", () => {

        setTimeout(() => {

            startCinematicEnding();

        }, 9000);

    });

}/* =========================================================
   FINAL SECRET HINT
   ========================================================= */

const findSecretButton =
    document.getElementById("findSecretButton");

if (findSecretButton) {

    findSecretButton.addEventListener("click", () => {

        const home =
            document.getElementById("home");

        if (home) {

            home.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        /* Make the hidden heart easier to notice */

        if (secretHeart) {

            setTimeout(() => {

                secretHeart.style.animation =
                    "secretHintPulse 1s ease-in-out 3";

                setTimeout(() => {

                    secretHeart.style.animation = "";

                }, 3200);

            }, 700);

        }

    });

}const secretHintStyle =
    document.createElement("style");

secretHintStyle.textContent = `

@keyframes secretHintPulse {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.35);
        filter: drop-shadow(0 0 15px rgba(255,120,160,.8));
    }

}

`;

document.head.appendChild(secretHintStyle);
if (!document.getElementById("RTL")) {
    const style = document.createElement("style");
    style.id = "RTL";
    style.innerHTML = `
        #rtlButton {
            transition: .15s;
            cursor: pointer;
        }
        main.rtl #rtlButton {
            transform: rotateY(180deg);
        }
        code, pre {
            direction: ltr;
            text-align: left;
        }
        main.rtl p,
        main.rtl ul,
        main.rtl ol,
        main.rtl h3,
        main.rtl textarea,
        main.rtl .flex.items-start.pl-1 {
            direction: rtl;
        }
        /* שדרוג האייקון */
        #rtlButton > div > div > div > span > div {
            height: 40px !important;
            width: 40px !important;
            background-color: #1d4ed8; /* כחול חזק */
            color: white !important;
            box-shadow: 0 0 10px rgba(29, 78, 216, 0.7);
            border-color: #1e40af !important; /* כחול כהה יותר */
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #rtlButton > div > div > div > span > div:hover {
            background-color: #2563eb; /* כחול מעט יותר בהיר בהובר */
            box-shadow: 0 0 15px rgba(37, 99, 235, 0.9);
        }
        /* הגדלת האייקון SVG */
        #rtlButton svg {
            height: 24px !important;
            width: 24px !important;
        }
    `;
    document.head.appendChild(style);
}

const mainElement = document.getElementById("main");

// טען מה־localStorage את מצב ה־rtl ושמור על המצב גם אחרי ריענון
const savedRTL = localStorage.getItem("isRTL");
if (savedRTL === "true") {
    mainElement.classList.add("rtl");
}

// הוספת קיצור מקלדת: Ctrl + R
document.addEventListener("keydown", (e) => {
    if (e.altKey && e.shiftKey) {
        e.preventDefault();
        mainElement.classList.toggle("rtl");
        const isRTLNow = mainElement.classList.contains("rtl");
        localStorage.setItem("isRTL", isRTLNow.toString());
    }
});


const observer = new MutationObserver(() => {
    const textarea = document.querySelector("main form div.bg-primary-surface-primary");
    if (textarea) {
        if (!document.getElementById("rtlButton")) {
            // הוסף את הכפתור
            const rtlButton = document.createElement("div");
            rtlButton.id = "rtlButton";
            rtlButton.innerHTML = `
                <div class="relative">
                    <div class="relative">
                        <div class="flex flex-col">
                            <span class="flex" data-state="closed">
                                <div title="החלף כיוון כתיבה" aria-label="החלף כיוון כתיבה"
                                    class="flex items-center justify-center h-9 w-9 rounded-full border border-token-border-light text-token-text-secondary dark:text-white hover:bg-token-main-surface-secondary dark:hover:bg-gray-700">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7 6H17 M7 10H13 M7 14H17 M7 18H13"
                                              fill="currentColor" stroke="currentColor"
                                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            `;

            textarea.firstElementChild.firstElementChild.appendChild(rtlButton);

            rtlButton.addEventListener("click", () => {
                mainElement.classList.toggle("rtl");
                // שמור ב-localStorage את המצב החדש
                const isRTLNow = mainElement.classList.contains("rtl");
                localStorage.setItem("isRTL", isRTLNow.toString());
            });
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

if (!document.getElementById("RTL")) {
    const style = document.createElement("style");
    style.id = "RTL";
    style.innerHTML = `
        #rtlButton {
            transition: .15s;
            cursor: pointer;
        }
        body.rtl #rtlButton {
            transform: rotateY(180deg);
        }
        code, pre {
            direction: ltr;
            text-align: left;
        }
        body.rtl p,
        body.rtl ul,
        body.rtl ol,
        body.rtl h3,
        body.rtl textarea {
            direction: rtl;
        }
    `;
    document.head.appendChild(style);
}

const observer = new MutationObserver(() => {
    const textarea = document.querySelector("div.ec4f5d61");
    if (textarea) {
        if (!document.getElementById("rtlButton")) {
            document.querySelector('body').classList.add('rtl');
            const rtlButton = document.createElement("div");
            rtlButton.id = "rtlButton";
            rtlButton.className = "ds-button ds-button--primary ds-button--filled ds-button--rect ds-button--m _3172d9f";
            rtlButton.style = "--ds-button-color: transparent; --button-text-color: #F8FAFF; --button-border-color: #626262; --ds-button-hover-color: #424451;";
            rtlButton.innerHTML = `
                <div class="ds-button__icon">
                    <span>
                        <div class="ds-icon" style="margin-left: 4px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6H17 M7 10H13 M7 14H17 M7 18H13"
                                    fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </span>
                </div>
            `;
            textarea.insertBefore(rtlButton, textarea.lastChild);
            rtlButton.addEventListener('click', () => document.querySelector('body').classList.toggle('rtl'));
        }
        // observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });

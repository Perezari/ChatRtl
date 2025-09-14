# ChatGPT RTL

[![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Manifest Version](https://img.shields.io/badge/manifest_version-3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)

Easily switch your conversation's text direction between Left-to-Right (LTR) and Right-to-Left (RTL) on popular AI chat platforms with just one click or a quick keyboard shortcut. This browser extension enhances your chat experience, especially for users who prefer or require RTL text alignment.

## ✨ Features

*   **Effortless Direction Toggle:** Instantly switch between LTR and RTL text alignment in your chat conversations.
*   **One-Click Convenience:** A dedicated button is injected into the UI of supported platforms for quick toggling.
*   **Broad Compatibility:** Currently supports conversations on:
    *   **ChatGPT** (`chatgpt.com`)
    *   **DeepSeek Chat** (`chat.deepseek.com`)
*   **Persistent State:** Your preferred text direction is automatically saved and restored when you revisit the page.
*   **Keyboard Shortcut:** For an even faster experience on ChatGPT, toggle RTL/LTR mode using the `Alt + Shift` keyboard combination.
*   **Multilingual Support:** The extension is localized and supports English, Hebrew (he), Farsi (fa), and Arabic (ar) for its interface elements.
*   **Custom Button Design:** Integrates seamlessly with a custom-styled button on ChatGPT for a polished look and feel.

## 📚 Tech Stack

*   **JavaScript:** Core logic for injecting CSS, manipulating the DOM, and handling user interactions.
*   **CSS:** Dynamically injected to control text direction and visual styles.
*   **HTML:** Minimal inline HTML for the toggle button.
*   **Chrome Extension API:** Utilizes `manifest_version 3` for content scripts and resource management.

## 🚀 Installation

This project is a browser extension (specifically developed for Chrome, compatible with other Chromium-based browsers). To install it:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Perezari/ChatRtl.git
    cd ChatRtl
    ```
2.  **Open Extension Management:**
    *   Open your browser (e.g., Chrome).
    *   Navigate to `chrome://extensions` (or `edge://extensions` for Edge, `brave://extensions` for Brave, etc.).
3.  **Enable Developer Mode:**
    *   Toggle the "Developer mode" switch, usually found in the top-right corner.
4.  **Load Unpacked Extension:**
    *   Click the "Load unpacked" button.
    *   Select the `ChatRtl` directory (the one containing `manifest.json`) from the cloned repository.

The extension should now appear in your list of installed extensions and be active.

## ▶️ Usage

Once installed, navigate to one of the supported chat platforms:

*   **ChatGPT:** `https://chatgpt.com/*`
*   **DeepSeek Chat:** `https://chat.deepseek.com/*`

1.  **Using the Toggle Button:** Look for a newly added button, typically near the chat input area. Clicking this button will switch the conversation's text direction.
2.  **Using the Keyboard Shortcut (ChatGPT Only):** Press `Alt + Shift` on your keyboard to quickly toggle between LTR and RTL modes.

The selected text direction will persist even if you refresh the page or close and reopen the tab.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is open-source. While no explicit `LICENSE` file is provided, it is distributed under the MIT License. Please consider adding a `LICENSE` file to the repository.
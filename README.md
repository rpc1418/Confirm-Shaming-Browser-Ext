# **EthicoPrompt - Chrome Extension for Detecting Confirm Shaming**

![GitHub repo size](https://img.shields.io/github/repo-size/rpc1418/Confirm-Shaming-Browser-Ext) ![License](https://img.shields.io/github/license/rpc1418/Confirm-Shaming-Browser-Ext) ![Contributors](https://img.shields.io/github/contributors/rpc1418/Confirm-Shaming-Browser-Ext)

EthicoPrompt is a powerful Chrome extension that helps detect and alert users to potential **confirm shaming** in web content. It leverages sentiment analysis to identify manipulative language in confirmation dialogues and notifications, ensuring a more ethical web browsing experience.

<div align="center">
  <img src="demo.gif" alt="EthicoPrompt Demo" width="600"/>
</div>

---

## 🚀 **Key Features**

- **Real-time Detection**: Analyzes text in real-time when web pages are loaded to detect manipulative language.
- **Sentiment Analysis**: Uses a Flask API and `TextBlob` to evaluate the sentiment of confirmation dialogues.
- **User Alerts**: Displays warnings when confirm shaming is detected, ensuring that users are aware of manipulative content.
- **Detailed Breakdown**: Lists specific words or phrases responsible for negative sentiment directly in the extension’s pop-up UI.
- **Clean UI**: Simple and user-friendly interface for viewing sentiment analysis results.

---

## 🛠️ **Technologies Used**

| **Technology**      | **Description**                                |
|---------------------|------------------------------------------------|
| Python Flask        | Backend API for sentiment analysis             |
| TextBlob            | Sentiment analysis library                     |
| Chrome Extension API| For background, content, and pop-up scripts    |
| JavaScript          | For fetching, processing, and displaying data  |
| HTML/CSS            | For the pop-up UI                              |

---

## 📂 **Project Structure**

```bash
EthicoPrompt/
├── app.py             # Flask API for sentiment analysis
├── background.js      # Background script for Chrome extension
├── content.js         # Content script to extract and analyze webpage text
├── popup.html         # Pop-up UI HTML file
├── popup.js           # JavaScript for handling pop-up data
├── styles.css         # Styling for the pop-up
└── README.md          # Project documentation
```
---
## ✨ How It Works

### 1. Install the Extension:
- Clone this repository and load it as an unpacked extension in Chrome.
- The extension monitors text on any webpage and checks for confirm shaming behavior.

### 2. Sentiment Analysis:
- The content script extracts visible text from the webpage and sends it to the Flask API, which uses `TextBlob` to calculate sentiment polarity (between -1 and 1).

### 3. Alerting the User:
- If the sentiment score is below a threshold (default 0.5), the extension alerts the user and shows a detailed breakdown of the words or phrases responsible in a pop-up.

---

## 🧑‍💻 Installation & Usage

### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/EthicoPrompt.git
```
### 2. Set Up the Flask Backend:
```bash
pip install Flask textblob flask-cors
python app.py
```
### 3. Load the Extension in Chrome:
- Open Chrome and navigate to chrome://extensions/
- Enable Developer Mode
- Click on Load Unpacked and select the EthicoPrompt folder
### 4. Start Browsing:
- Navigate to any website and EthicoPrompt will analyze the content.
- If potential confirm shaming is detected, an alert will pop up!
---


## 👀 Preview

Check out a quick demo of **EthicoPrompt** in action:

![EthicoPrompt Demo](path-to-your-demo.gif)

You can view the demo directly by [clicking here](your-demo-link).

---




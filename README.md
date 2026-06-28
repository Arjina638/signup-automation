This file contains a clean execution script of the signup process automation.

---

## Environment Setup:-

To ensure the end to end testing and automation this project uses the following software tools:-
* Operating System:linux(Ubuntu)
* Runtime Language:Node.js
* Testing Framework:Playwright
* Browsers:Chromium, Firefox,Webkit

---

## How to run the Script:-

    First install all the project dependencies,
        ```bash
        npm install
        npx playwright install
    Execute the automation script in headed mode,
        npx playwright test --headed
    Run the test Dashboard
        npx playwright show-report
---

## Demo Video of the execution :-
[Click here for demo video](https://drive.google.com/file/d/1XpIaSVkOQnKauhgFg83GxkGS-l_pTmgB/view?usp=drive_link)

---

## Download Test Report:-
[Download the full report](https://drive.google.com/file/d/1axMxfnlNXT-MrX6bdsKgevbXKBtWvKqw/view?usp=sharing)
---

## Problem Faced:-
Upon the clicking of next button on 'Set up your Account',the app leads to a live security window that requires (OTP)verification code sent via email.Since I cannot use real email-id for testing purposes and don't have any kind of access to backend API keys, processing further was not possible.

---

## Solution to the Problem:-
The best solution for this would be using API integration(a temporary email proxy like mailosaur).This will allow the Playwright to directly fetch a realtime OTP code from test mailbox letting automation process continue without any hurdles.

---

## Execution Summary:-
The test evaluated all the initial data enrty resulting on 100% green pass up to the verification boundary.

# Typing Tester

## Project Description

The Typing Tester is a web-based application designed to help users improve their typing speed and accuracy. Users are presented with a simple interface where they type a provided paragraph and receive instant feedback on their performance. The application calculates Words Per Minute (WPM) and accuracy percentage, providing clear metrics for self-assessment. Each test features a randomly selected paragraph from a predefined set, ensuring every session is unique and engaging.

## Target Audience

This project is suitable for anyone who wants to practice and measure their typing skills. It is particularly helpful for students, professionals, or anyone aiming to increase efficiency and speed when typing.

## Key Features

- **WPM & Accuracy Calculation**  
  Calculates and displays typing speed and accuracy at the end of each test.

- **Real-Time Feedback**  
  Highlights each character as it is typed, showing whether it is correct or incorrect.

- **Dynamic Content**  
  Supplies a randomly selected paragraph for each test to encourage varied practice.

- **Built-in Timer**  
  Automatically tracks time, starting with the first keystroke and ending upon completion of the paragraph.

- **Restart Functionality**  
  Provides a button to reset the test and start a new typing session.

## Technologies Used

- **HTML (HyperText Markup Language)**  
  Forms the foundational structure and semantics, generating page elements like the title, timer, and text areas.

- **CSS (Cascading Style Sheets)**  
  Controls the application’s visual design, color scheme, and layout. CSS classes are used for real-time visual feedback, such as highlighting correct or wrong characters.

- **JavaScript**  
  Brings interactivity to the application, including:
    - **DOM Manipulation:** Access and Updates HTML elements live using features like `document.getElementById` and `textContent`
    - **Event Handling:** Listens for user input events to trigger core logic with every keystroke
    - **Timers:** Utilizes `setInterval` for the live timer, updating time every second
    - **Arrays:** Stores test paragraphs and dynamically loads them for each test run

## Project Dependencies

- A modern web browser with internet access is required to use this application. No installation or downloads are necessary.

## Instructions for Use

1. Open the application's live link ( https://jayanthg-14.github.io/TypoMeter/ ) in a web browser.
2. The app displays a random paragraph; typing starts the timer.
3. Type the paragraph into the input box. Correct letters show as green; incorrect ones as red.
4. After completing the paragraph, the timer stops, and the application displays your WPM and accuracy.

## Troubleshooting

- **Timer Doesn’t Start**  
  The timer only begins when typing starts. Click the text box and type the first character.

- **Input Box Disabled**  
  This occurs after a test or when 10 minutes pass. Click the Restart button to start a new test and re-enable the input.

## Contributing or Getting Help

Find the source code and participate in development by visiting the GitHub repository:

https://github.com/jayanthg-14/TypoMeter.

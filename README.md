# QR Code Generator

A simple Node.js application that generates a QR code from a user-provided URL. This project demonstrates basic use of user input handling and file operations in Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Introduction

This project prompts the user to enter a URL, generates a QR code from the input URL, and saves the QR code as a PNG file. It uses `inquirer` for user input, `qr-image` for QR code generation, and Node.js's built-in `fs` module for file operations.

## Features

- Prompts the user for a URL
- Generates a QR code from the input URL
- Saves the QR code as a PNG file

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the script:**

   ```sh
   node index.js
   ```

## Usage

1. **Run the application:**
   Open your terminal and navigate to the project directory.

2. **Enter the URL:**
   When prompted, enter the URL you want to generate a QR code for.

3. **Find the QR code:**
   The generated QR code will be saved as `qr_code.png` in the project directory.

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

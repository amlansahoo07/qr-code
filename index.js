// Import necessary modules
import inquirer from "inquirer"; // Inquirer is used to prompt user input in the command line
import qr from "qr-image"; // qr-image is used to generate QR codes
import fs from "node:fs"; // File system module to handle file operations

// Define the questions to prompt the user
const questions = [
    {
        type: 'input',
        name: 'url',
        message: "Enter the URL: ", // Message displayed to the user
    }
];

// Prompt the user to enter the URL
inquirer.prompt(questions).then((answers) => {
    // Get the user input from the answers
    let myURL = answers['url'];
    console.log(myURL); // Log the URL to the console

    // Generate a QR code from the URL
    var qr_svg = qr.image(myURL, { type: 'png' });

    // Pipe the generated QR code to a file named 'qr_code.png'
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
});

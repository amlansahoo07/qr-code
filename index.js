import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

const questions = [
    {
      type: 'input',
      name: 'url',
      message: "Enter the URL: ",
    }
]

inquirer.prompt(questions).then((answers) => {
    let myURL = answers['url'];
    console.log(myURL);
    var qr_svg = qr.image(myURL, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
  });


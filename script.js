// Use NodeJS built-in function to read text file contents asynchronously
const fs = require('fs');

const filePath = 'file.txt';


fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:',err);
        return;
    }
    // Display the content using DOM methods
    document.addEventListener('DOMContentLoaded', () => {
        // Assuming you have an HTML element with id 'fileContent' to display the paragraph
        const fileContentElement = document.getElementById('fileContent');

        // Update the innerText of the HTML element with the content of the text file
        fileContentElement.innerText = data;
    });
    // // Display the content of the text file
    // console.log('File Content:');
    // console.log(data);
});

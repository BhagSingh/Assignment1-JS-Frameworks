// Use NodeJS built-in function to read text file contents asynchronously
const fs = require('fs');

// Specify the file path
const filePath = 'file.txt';

// Use the 'readFile' function to read the contents of the text file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:',err);
        return;
    }
    
    // Display the content of the text file
    console.log('File Content:');
    console.log(data);
});

const fs = require('fs');
const path = require('path');

const directoryPath = './'; // specify the directory path here
const outputPath = './output.txt'; // specify the output file path here

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}: ${err}`);
        return;
      }

      const delimiter = '\n' + '-'.repeat(50) + '\n';
      const outputData = `File Name: ${file}\nFile Path: ${filePath}\nContents:\n${data}${delimiter}`;

      fs.appendFile(outputPath, outputData, (err) => {
        if (err) {
          console.error(`Error writing to file ${outputPath}: ${err}`);
        }
      });
    });
  });
});

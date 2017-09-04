const fs = require('fs');
const path = require('path');

module.exports = function runActionOnFilesWithExtension(directory, extension, action) {
    let filesWithExtension;
    const normalizedExtension = `.${extension}`;
    fs.readdir(directory, (err, files) => {
        if (err) {
            return action(err);
        }
        filesWithExtension = files.filter((file) => {
            if (path.extname(file) === normalizedExtension) {
                return true;
            }
        });
        action(null, filesWithExtension);
    });
}
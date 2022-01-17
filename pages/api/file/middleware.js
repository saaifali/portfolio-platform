/*const formidable = require('formidable');
const fs = require('fs');
import {createNecessaryDirectoriesSync} from "filesac";

const form = formidable({ multiples: true, uploadDir:`/Users/ankitsbhamra/Documents/portfolio-platform/files`, keepExtensions: true });

const uploadPath = `${__dirname}/../uploads`;
createNecessaryDirectoriesSync(`${uploadPath}/x`);

const middleware = handler => (req, res) => {
    const { method } = req;
    if (method === 'POST') {
        form.parse(req, (err, fields, files) => {
            console.log('fields:', fields);
            // console.log('files:', files);
            console.log(Object.keys(files));
            for(let i =0; i < files.fileData.length; i++) {
                const fileObj = files.fileData[i];
                console.log(fileObj.filePath, fileObj.originalFilename);
                console.log('',fileObj.path, form.uploadDir + "/" + files.name);
            }
            console.log('',files.path, form.uploadDir + "/" + files.name);
            /!*for(let i=0;i< files.fileData.length;i++ ) {
                const fileData = files.fileData[i];
                console.log("Data::::",fileData.filePath,
                    `${form.uploadDir}/${fileData.originalFilename}`);
                fs.rename(
                    fileData.filePath,
                    `${form.uploadDir}/${fileData.originalFilename}`
                )
            }*!/
            return handler(req, res);
        });
    } else {
        return handler(req, res);
    }
};*/
import nc from 'next-connect';
import multer from 'multer';
// import {createNecessaryDirectoriesSync} from "filesac";
import fs from 'fs';
import path from 'path';

const baseUploadPath = '/Users/ankitsbhamra/Documents/portfolio-platform/files';
const dockerTemplatesPath = '/Users/ankitsbhamra/Documents/portfolio-platform/pages/api/file/templates';
let baseFolderPath = null;
const configFileName = 'readmeConfig.json';
const fileMap = {"node":"NodeDockerfile"};

const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
    destination: function(req, file, cb) {
        const relPath = file.originalname.substring(0, file.originalname.lastIndexOf('/'));
        if (!baseFolderPath) {
            baseFolderPath = relPath.substring(0, relPath.indexOf('/'));
        }
        const filePath = `${baseUploadPath}/${relPath}`;
        try {
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, true);
            }
        } catch (e) {
            console.log('File Write Error::', filePath);
        } finally {
            cb(null, filePath);
        }
    },
    filename: function(req, file, cb) {
        const fileName = file.originalname.substring(file.originalname.lastIndexOf('/') + 1);
        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {
    const relPath = file.originalname.substring(0, file.originalname.lastIndexOf('/'));
    if (relPath.includes('/.')) {
        cb(null, false);
    }  else {
        cb(null, true);
    }
};

const upload = multer({storage, preservePath: true, fileFilter});

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res, next) => {
        res.status(404).end("Page is not found");
    },
})
    .use(upload.array('fileData'))
    .post((req, res) => {
        createDockerImage();
        res.status(200).json({message: 'OK'});
    });

const generateDocker = config => {
    const pathVal=path.join(dockerTemplatesPath, `${fileMap[config.projectType]}`);
    fs.readFile(pathVal, 'utf8', (err, lines) => {
        const lineArr = lines.split('\n');
        const injectedDockerFile = lineArr.map(el =>
            el.includes('$buildCommand')
                ? el.replace('$buildCommand', config.buildCommand)
                : (el.includes('$runCommand')
                    ? el.replace('$runCommand', config.runCommand)
                    : el
                )
            ).join('\n');
        fs.writeFile(`${baseUploadPath}/${baseFolderPath}/Dockerfile`, injectedDockerFile, err => {
            if (err) {
                throw err;
            }
        })
    });
};

const createDockerImage = () => {
    readConfigFile(generateDocker);
};

const readConfigFile = (cb) => {
    fs.readFile(`${baseUploadPath}/${baseFolderPath}/${configFileName}`,'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        cb(JSON.parse(data));
    });
};

export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};
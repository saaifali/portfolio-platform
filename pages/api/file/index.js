import nc from 'next-connect';
import multer from 'multer';
// import {createNecessaryDirectoriesSync} from "filesac";
import fs from 'fs';

const baseUploadPath = '/Users/ankitsbhamra/Documents/portfolio-platform/files'

const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
    destination: function(req, file, cb) {
        const relPath = file.originalname.substring(0, file.originalname.lastIndexOf('/'));
        const filePath = `${baseUploadPath}/${relPath}`;
        try {
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, true);
            }
        } catch (e) {
            console.log('Errorrrr::::', filePath);
        } finally {
            cb(null, filePath);
        }
    },
    filename: function(req, file, cb) {
        const fileName = file.originalname.substring(file.originalname.lastIndexOf('/') + 1);
        console.log('FileName::: ', fileName);
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
        console.log('Files: ', req.files.length);
        res.status(200).json({message: 'OK'});
    });

// export default middleware( (req, res) => {
//     const { method } = req;
//     if (method === 'POST') {
//         handlePostReq(req, res);
//     }else {
//         res.status(200).json({message: 'Non POST'});
//     }
// });

const handlePostReq = (req, res) => {
    console.log('Request: ', req.files);
    res.status(200).json({message: 'OK'});
};

export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};
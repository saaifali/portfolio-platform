import React, {useState} from 'react';
import Styles from './style.module.scss';
import Questionaire from '../Questionaire';
import axios from 'axios';

const Navigator = () => {

    const [succesfulResponse, setSuccesfulResponse] = useState(null);

    const handleFolderChange = evt => {
        const files = evt.target.files;
        const formData = new FormData();
        for (let i=0; i<files.length; i++) {
            formData.append('fileData', files[i]);
        }
        setSuccesfulResponse(null);
        axios({
            method: "post",
            url: "http://localhost:3000/api/file",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                setSuccesfulResponse(true);
            })
            .catch(function (response) {
                //handle error
                setSuccesfulResponse(false);
                console.error("UI Error: ",response);
            });
    };

    const handleFileChange = evt => {
        const files = Array.from(evt.target.files);
        console.log('File::File: ', files);
    };

    return (
        <div className={Styles.navigatorMainContainer}>
            {
                /*succesfulResponse === true
                    ? <Questionaire />
                    : */<div className={Styles.buttonContainer}>
                        <label className={`${Styles.labelStyles} button-style`}>
                            Upload Project
                            <input
                                type={'file'}
                                id="project-selector"
                                multiple={true}
                                webkitdirectory="true"
                                directory="true"
                                onChange={handleFolderChange}
                            />
                        </label>
                        <label className={`${Styles.labelStyles} button-style`}>
                            Upload Files
                            <input
                                type={'file'}
                                id="files-selector"
                                multiple={true}
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
            }
        </div>
    )
};

export default Navigator;
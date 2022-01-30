import React, {useState} from 'react';
import DropDown from '../../Common/DropDown';
import Styles from './style.module.scss';

const projectTypeData = [
    {display: 'HTML', value: 'HTML'},
    {display: 'NodeJS', value: 'NodeJS'},
    {display: 'Java', value: 'Java'},
    {display: 'Python', value: 'Python'}
    ];

const dbData = [
    {display: 'Mongo DB', value: 'Mongo'},
    {display: 'MySQL', value: 'MySQL'},
];

const Questionaire = props => {

    const DB_REQUIRED = 'DB_REQUIRED';
    const [dbReq, setDBReq] = useState(false);

    const handleFileChange = evt => {
        const files = Array.from(evt.target.files);
        console.log('File::File: ', files);
    };

    const { onSave, formData } = props;

    return (
        <div className={Styles.questionaireContainer}>
            <div className={Styles.projectDetailsDiv}>
            <div className={Styles.dropDownContainer}>
                <label>
                    Project Type
                    <DropDown
                        data={projectTypeData}
                        selectedData={projectTypeData[0]}
                        onChange={data => console.log('Data::::', data)}
                    />
                </label>
            </div>
            <div className={Styles.radioBtnContainer}>
                <div className={Styles.headerContainer}>
                    Database Used
                </div>
                <div className={Styles.radioBtnContentContainer}>
                    <label>
                        Yes
                        <input
                            type={'radio'}
                            name={DB_REQUIRED}
                            onClick={()=>setDBReq(true)}
                            defaultChecked={!!dbReq?'checked':null}
                        />
                    </label>
                    <label>
                        No
                        <input
                            type={'radio'}
                            name={DB_REQUIRED}
                            onClick={()=>setDBReq(false)}
                            defaultChecked={!dbReq?'checked':null}
                        />
                    </label>
                </div>
            </div>
            { dbReq &&
                (
                    <>
                        <div className={Styles.dropDownContainer}>
                            <label>
                                Database Type
                                <DropDown
                                    data={dbData}
                                    selectedData={dbData[0]}
                                    onChange={data => console.log('Data::::', data)}
                                />
                            </label>
                        </div>
                        <div className={Styles.csvUploadContainer}>
                            <label>
                                Upload DB (in CSV format)
                                <label className={'button-style'}>
                                    Upload DB
                                    <input
                                        type={'file'}
                                        multiple={false}
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </label>
                        </div>
                    </>
                )
            }
        </div>
            <div className={Styles.commandContainer}>
                <div className={Styles.commandContentContainer}>
                    <div className={Styles.commandContentHeader}>
                        Build Command
                    </div>
                    <div
                        className={`${Styles.commandMainContent} background-style-inverted`}
                        contentEditable={true}
                    />
                </div>
                <div className={Styles.commandContentContainer}>
                    <div className={Styles.commandContentHeader}>
                        Run Command
                    </div>
                    <div
                        className={`${Styles.commandMainContent} background-style-inverted`}
                        contentEditable={true}
                    />
                </div>
            </div>
            <div className={Styles.buttonContainer}>
                <div className={'button-style-inverted'}>
                    Clear
                </div>
                <div className={'button-style'} onClick={()=>onSave()}>
                    Save
                </div>
            </div>
        </div>
    )
};

export default Questionaire;
import React from 'react';
import Styles from './Projects.module.scss';
import Navigator from './Navigator';

const Projects = () => {

    return (
        <div className={Styles.projectsMainContainer}>
            <h2 className={Styles.projectsHeaderContainer}>
                Projects
            </h2>
            <Navigator/>
        </div>
    )
};

export default Projects;
import React from "react";
import Styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={Styles.footerMainContainer}>
            <div className={Styles.footerMainContentContainer}>
                <div className={Styles.footerBorder} />
                <div className={Styles.footerData}>
                    <p> Built with Next.js, TailwindCss and GCP</p>
                    
                    
                    <div className={Styles.linksContainer}>
                        <a
                            href="https://twitter.com/biker_unlocked"
                            className={Styles.linkData}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saaifali/"
                            className={Styles.linkData}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/saaifali"
                            className={Styles.linkData}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
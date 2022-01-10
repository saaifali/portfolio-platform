import React from "react"
import Image from "next/image"
import profile from "../../public/images/profile.jpg"
import Styles from "./About.module.scss";

const About = () => {
    return (
        <div className={`container ${Styles.aboutMainContainer}`}>
            <div className={Styles.aboutMainContentContainer}>
                <div className={Styles.aboutTextContainer}>
                    <h1 className={Styles.aboutTextHeader}>
                        Hey, I'm Saif Ali
                    </h1>
                    <div className={Styles.aboutTextContent}>
                        <p className={Styles.aboutTextPara}>
                            I am a Developer and a future Freelancer. I work as a Software Engineer with McAfee Enterprise.
                        </p>
                        <p className={Styles.aboutTextPara}>
                            
                        Life is strange and so is the path everybody takes in it. I love architecting and developing solutions
                            to various real world problems with the knowledge I gather in this path.
                        </p>
                        <p className={Styles.aboutTextPara}>
                        Currently developing applications in Python, Node.js, Powershell and learning about taking them to 
                            the cloud. 

                        </p>
                        <p className={Styles.aboutTextPara}>
                        Welcome to my little corner of Internet, built with Next.js, Tailwindcss and GCP, 
                            brought to life to learn about my journey in technology, biking, travel and more. 

                        </p>
                        <a className={`resume-download-button ${Styles.buttonDiv}`} href='/docs/resume.pdf' download>
                            <svg className={Styles.buttonSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Resume</span>
                        </a>
                        
                    </div>
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className={Styles.imageContent}
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;

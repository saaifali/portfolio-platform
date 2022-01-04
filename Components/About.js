import React from "react"
import Image from "next/image"
import profile from "../public/images/profile.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey, I'm Saif Ali
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I am a Developer and a future Freelancer. I work as a Software Engineer with McAfee Enterprise.
                        </p>
                        <p className="mb-4">
                            
                        Life is strange and so is the path everybody takes in it. I love architecting and developing solutions
                            to various real world problems with the knowledge I gather in this path.
                        </p>
                        <p className="mb-4">
                        Currently developing applications in Python, Node.js, Powershell and learning about taking them to 
                            the cloud. 

                        </p>
                        <p className="mb-4">
                        Welcome to my little corner of Internet, built with Next.js, Tailwindcss and GCP, 
                            brought to life to learn about my journey in technology, biking, travel and more. 

                        </p>
                        <a class="bg-black hover:bg-gray-400 text-white dark:bg-white dark:text-black font-bold py-2 px-4 rounded inline-flex items-center" href='/docs/resume.pdf' download>
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Resume</span>
                        </a>
                        
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
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

import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from 'react';

  
const Navigation = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
          <nav className='flex items-center flex-wrap p-3 bg-white md:py-6 md:mb-6 dark:bg-black '>
              <ThemeSwitch/>
            <Link href='/'>
              <a className='inline-flex items-center p-2 mr-4 '>
                <span className='text-xl font-bold tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'>
                  Saif Ali
                </span>
              </a>
            </Link>
            <button
              className=' inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none dark:text-white'
              onClick={handleClick}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${
                active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <Link href='/'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                    Home
                  </a>
                </Link>
                <Link href='/services'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                    Career
                  </a>
                </Link>
                <Link href='/about-us'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                    Experiences
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </>
      );

    return (
        <nav className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <ThemeSwitch/>
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Saif Ali
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${ active ? '' : 'hidden'}`}>
                        <Link href="/blog">
                            <a
                                className={"font-small tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                            >
                                Blogs
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a
                                className={"font-small tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                            >
                                Projects
                            </a>
                        </Link>
                </div>
                
            </div>
                
        </nav>
    )
}

export default Navigation;
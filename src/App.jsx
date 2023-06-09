import { useState } from 'react';

import Spline from '@splinetool/react-spline';
import IconYoutube from "./assets/icon-youtube.svg";
import IconTwitter from "./assets/icon-twitter.svg";
import IconLaptop from "./assets/icon-laptop.svg";
import Logo from "./assets/logo.svg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="font-sm text-white relative bg-spline h-screen w-screen overflow-hidden">
        <Spline className="m-0 absolute right-0 top-0 scale-30 -translate-y-48 sm:-translate-y-0 translate-x-96 sm:scale-60 sm:translate-x-72 md:scale-70 md:translate-x-64 lg:scale-80 lg:translate-x-60 xl:scale-100 xl:translate-x-32" style={{ width: '1200px' }} scene="https://prod.spline.design/tPEkFO98iLwul1pA/scene.splinecode" />
        <section className="w-full text-white absolute top-8 flex flex-col gap-y-20">
            <nav className="flex gap-0 xxs:gap-2 md:gap-8 items-center mr-8 ml-8 md:ml-24">
                <li className="list-none"><img src={Logo} alt="Logo" /></li>
                <li className="list-none"><a className="text-xs sm:text-base py-2 px-2 sm:px-5 border border-white border-opacity-0 hover:border-opacity-20 rounded-2xl duration-1000" href="/">Home</a></li>
                <li className="list-none"><a className="text-xs sm:text-base py-2 px-2 sm:px-5 border border-white border-opacity-0 hover:border-opacity-20 rounded-2xl duration-1000" href="/">Download</a></li>
                <li className="list-none"><a className="text-xs sm:text-base py-2 px-2 sm:px-5 border border-white border-opacity-0 hover:border-opacity-20 rounded-2xl duration-1000" href="/">App</a></li>
                <li className="list-none"><a className="text-xs sm:text-base py-2 px-2 sm:px-5 border border-white border-opacity-0 hover:border-opacity-20 rounded-2xl duration-1000" href="/">Login</a></li>
                <li className="list-none"><button className="text-xs md:text-base regular-button ml-0">Get Started</button></li>
            </nav>
            <h1 className="mr-8 ml-12 sm:ml-24 text-white font-spline-sans-mono font-bold text-2xl sm:text-5xl md:text-6xl lg:text-7xl max-w-xxs sm:max-w-sm md:max-w-md lg:max-w-lg">Collaborate with people</h1>
            <p className="mr-8 ml-12 sm:ml-24 text-xs sm:text-base font-spline-sans max-w-sm">Bring your team together and build your community by using our cross-platform app that lets you collaborate wia chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
            <button style={{ backdropFilter: "blur(20px)" }} className="text-xs sm:text-base regular-button ml-12 sm:ml-24"><img src={IconLaptop} alt="Download"/>Download for Mac</button>
        </section>
        <aside className="absolute top-36 left-8 flex flex-col gap-8">
            <div className="w-px h-96 custom-gradient"/>
            <img src={IconTwitter} alt="icon for twitter" />
            <img src={IconYoutube} alt="icon for youtube" />
        </aside>
    </main>
  )
}

export default App

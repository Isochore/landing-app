import { useState } from 'react';

import Spline from '@splinetool/react-spline';
import Youtube from "./assets/icon-youtube.svg";
import Twitter from "./assets/icon-twitter.svg";
import Laptop from "./assets/icon-laptop.svg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="font-sm text-white relative bg-spline h-screen w-screen">
        <Spline className="m-0 absolute -right-0 -top-0" style={{ width: '1200px' }} scene="https://prod.spline.design/tPEkFO98iLwul1pA/scene.splinecode" />
        <section className="text-white absolute top-8 flex flex-col gap-y-20">
            <h1 className="mr-8 ml-24 text-white font-spline-sans-mono font-bold text-7xl max-w-xl">Collaborate with people</h1>
            <p className="mr-8 ml-24 font-spline-sans max-w-sm">Bring your team together and build your community by using our cross-platform app that lets you collaborate wia chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
            <button style={{ backdropFilter: "blur(20px)" }} className="flex gap-3 justify-center items-center max-w-xs bg-download text-base py-3 px-7 ml-24 rounded-xl border border-white border-opacity-10 hover:border-opacity-80 hover:-translate-y-0.5 duration-1000"><img src={Laptop} alt="Download"/>Download for Mac</button>
        </section>
    </main>
  )
}

export default App

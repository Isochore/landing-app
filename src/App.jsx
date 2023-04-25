import { useState } from 'react';

import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="font-sm text-white relative bg-spline h-screen w-screen">
        <Spline className="m-0 absolute -right-0 -top-0" style={{ width: '1200px' }} scene="https://prod.spline.design/tPEkFO98iLwul1pA/scene.splinecode" />
        <section className="text-white absolute top-8 flex flex-col gap-y-20">
            <h1 className="mr-8 ml-24 text-white font-spline-sans-mono font-bold text-7xl max-w-xl">Collaborate with people</h1>
            <p className="mr-8 ml-24 font-spline-sans max-w-sm">Bring your team together and build your community by using our cross-platform app that lets you collaborate wia chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        </section>
    </main>
  )
}

export default App

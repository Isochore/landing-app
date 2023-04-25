import { useState } from 'react';

import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sm text-white relative bg-spline h-screen w-screen">
        <Spline className="m-0 absolute -right-0 -top-0" style={{ width: '1200px' }} scene="https://prod.spline.design/tPEkFO98iLwul1pA/scene.splinecode" />
    </div>
  )
}

export default App

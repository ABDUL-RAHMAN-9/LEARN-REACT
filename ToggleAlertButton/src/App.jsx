import React, { useState } from 'react'
import AlertBox from './AlertBox'
import ShowBtn from './ShowBtn'


const App = () =>
{

  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <AlertBox onClose={() => setShowAlert(false)} />}
      <ShowBtn onShow={() => setShowAlert(true)}/>
    </div>
  )
}

export default App

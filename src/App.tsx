import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {

  const [showAlert, setAlert] = useState(false);

  const handleCloseAlert = () => {
    setAlert(false);
  }

  const handleOpenAlert = () => {
    setAlert(true);
  }

  return (
    <>
    {showAlert && <Alert dismisable onClick={handleCloseAlert}>info</Alert>}
    <Button color='danger' onClick={handleOpenAlert}> Click me</Button>
    </>
  )
}

export default App

import ListGroup from './components/ListGroup'
import './App.css'

function App() {

  const items = [
    'New Delhi',
    'New Mumbai',
    'Kolkata',
    'Surat',
    'Tamil Nadu'
];

  return (
    <>
    <ListGroup items={items} heading='Cities'/>
    </>
  )
}

export default App

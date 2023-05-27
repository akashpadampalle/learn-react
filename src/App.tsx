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

const handleSelectItem = (item: string) => {
  console.log(item);
} 

  return (
    <>
    <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
    </>
  )
}

export default App

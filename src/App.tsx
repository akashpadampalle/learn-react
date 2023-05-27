import ListGroup from './components/ListGroup'
import './App.css'


function App() {

  const items = [
    'New York',
    'Paris',
    'Delhi',
    'London'
  ]

  return (
    <>
    <ListGroup items={items} heading='Cities' onSelectItem={(item)=> console.log(item)}/>
    </>
  )
}

export default App

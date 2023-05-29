
import { useState } from 'react';
import './App.css';
import Game from './components/Game';


function App() {

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  })

  const handleClick = () => {
    setGame({...game, player: {...game.player, name: 'Akash'}});
  }

  return (
    <>
      <Game game={game} onClick={handleClick}/>
    </>
  )
}

export default App

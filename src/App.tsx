
import './App.css';
import LikeButton from './components/LikeButton';


function App() {

  function handleLikeClick(){
    console.log('Clicked');
  }

  return (
    <>
      <LikeButton onClick={handleLikeClick} />
    </>
  )
}

export default App

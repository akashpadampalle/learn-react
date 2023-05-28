import { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';


interface Props{
    onClick : () => void
}


function LikeButton({onClick}: Props) {

const [like, setLike] = useState(false);

function toggle(){
    setLike(!like);
    onClick();
}

  return (
    (like) ? <AiFillHeart  size={40} color='red' onClick={toggle} /> : <AiOutlineHeart size={40} onClick={toggle}/>
  )
}

export default LikeButton
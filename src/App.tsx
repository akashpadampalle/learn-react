
import { useState } from 'react';
import './App.css';
import ExpandableText from './components/ExpandableText';


function App() {

  const expnadableTextClick = () => console.log('clicked');
  

  return (

    <>
    <ExpandableText onClick={expnadableTextClick}> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus eligendi tenetur consectetur magni accusantium aut unde odit nisi? Cum, eaque sit porro natus inventore sint distinctio alias reiciendis pariatur?
    </ExpandableText> 
    </>
  )
}

export default App

import React,{useState} from 'react';
import Title from './Title';
import Sliderhey from './Sliderhey';
export default function Slider() {
  const [slideValue, setSlideValue] = useState(0);

  function handleInput(e)
  {
   setSlideValue(e.target.value)
  }
  return (
    <div className="container text-center">
      <Title text={"Slide to grow"}/>
   <Sliderhey setValue={slideValue} handleSlider ={handleInput} />
   </div>
  )
}

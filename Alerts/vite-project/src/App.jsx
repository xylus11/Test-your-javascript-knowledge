import Alert from './componant/Alert'
import './App.css'                                              

function App() {
 

  return (
    <div className='container mx-auto my-3'>
    <Alert type={"success"} text={"Successful login"}/>
  <Alert type={"success"} text={"check network connection"}     delay= {true}/>



    </div>
  )
}

export default App

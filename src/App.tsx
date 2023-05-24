import {useState} from 'react'

function App() {

  const [message, setMessage] = useState("Let's learn more about testing in React")
  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button 
      style={{background:"red", padding:"10px", color:"#fff"}} 
      onClick={() => setMessage('New message!')}>Change message</button>
    </div>
  );
}

export default App;

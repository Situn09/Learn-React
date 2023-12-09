import { useState } from 'react' // this is hook , like this you import
import './App.css'

function App() {
  let [counter, setCounter] = useState(Math.ceil((Math.random()*10)+1)) // without this ui didn't change
  // let counter = 11; 
  
  const addValue = () =>{
    
    // counter++;
    if(counter>=20){ 
      setCounter( Math.ceil((Math.random()*10)+1))
    }
    // counter++ // this will value solve the issue
    // setCounter(++counter) // this work fine in both ui and console i.e logic
    // setCounter(counter) // this work after double click
    setCounter(counter => counter+1) // in this method if condition not work on ui
    console.log(counter); // but in console it give desire value
    // setCounter(counter+1)
  }
/* major problem i notice when i switch from addValue to removeValue then console value din't change but ui show change value */
  const removeValue = () =>{

    // counter--;
    if(counter<1){
      counter = Math.ceil((Math.random()*10)+1)
    }
    console.log(counter);
    setCounter(counter--)
    
  }

  return (
    <>
      <h1>useState</h1>
      <h2> counter game</h2>
      <h2>Can you increase my counter above 20 or below 0</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}> 
        Add value</button>
      <br />
      <button onClick={removeValue}>
        Remove value</button>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const [counter, setCounter]  = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1 )
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
    
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
  
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value {counter}</button> 
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App
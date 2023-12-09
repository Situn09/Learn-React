import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' //here we can import your sepicfic compnent

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'kcr',
    age:26
  }
  return (
    <>
      <h1 className='bg-green-400 p-4 text-white m-8 rounded-xl'>Tailwind Test</h1>
      <Card username = "fjla" someObj={myObj}/>{/*in {}bracket you give obj*/}
      <Card/>
    </>
  )
}

export default App

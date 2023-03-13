import { ChangeEventHandler, useState } from 'react'
import TextInput from './components/TextInput'
import TextOutput from './components/TextOutput'

import './App.css'

function App() {

  const [inputText, setInputText] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { value = "" } = event.target || {}
    console.log(value)
    setInputText(value)
  }

  return (
    <div className="App">
      <TextInput onInputChange={handleInputChange} value={inputText} />
      <TextOutput outputText={inputText} />
    </div>
  )
}

export default App

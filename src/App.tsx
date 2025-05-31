import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import reactLogo from './assets/react.svg'
import { useBoundStore } from './store'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')
  const bears = useBoundStore.use.bears()
  const addBear = useBoundStore.use.addBear()

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>
      <div className="flex h-32 w-32 flex-col">
        <Button asChild>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
          </a>
        </Button>
        <Button asChild>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
          </a>
        </Button>
        <Button asChild>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Button>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <p>Bears: {bears}</p>
      <Button onClick={addBear}>Add Bear</Button>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault()
          greet()
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  )
}

export default App

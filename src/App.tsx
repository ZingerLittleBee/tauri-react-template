import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'
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
    <main className="container flex h-screen flex-col items-center justify-center gap-4">
      <h1>Welcome to Tauri + React</h1>
      <div className="flex gap-2">
        <Button asChild size="icon" className="p-2">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" alt="Vite logo" />
          </a>
        </Button>
        <Button asChild size="icon" className="p-2">
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" alt="Tauri logo" />
          </a>
        </Button>
        <Button asChild size="icon" className="p-2">
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" alt="React logo" />
          </a>
        </Button>
        <Button asChild size="icon" variant="outline" className="p-2">
          <a href="https://ui.shadcn.com" target="_blank">
            <img src="/shadcn.svg" alt="Shadcn logo" />
          </a>
        </Button>
        <Button asChild size="icon" variant="outline" className="p-2">
          <a href="https://zustand.dev/" target="_blank">
            <img src="/zustand.svg" alt="Zustand logo" />
          </a>
        </Button>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <p>Bears: {bears}</p>
      <Button onClick={addBear} variant="outline">
        Add Bear
      </Button>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          greet()
        }}
      >
        <Input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit">Greet</Button>
      </form>
      <p>{greetMsg}</p>
    </main>
  )
}

export default App

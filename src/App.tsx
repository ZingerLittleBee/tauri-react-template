import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useBoundStore } from '@/store'
import { useImmerStore } from '@/store/immer/immer-store'
import usePersistStore from '@/store/persist/persist-store'
import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './components/ui/card'
import { Label } from './components/ui/label'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')
  const bears = useBoundStore.use.bears()
  const addBear = useBoundStore.use.addBear()

  const { position, setX, setY } = useImmerStore()

  const { fishes, addFish } = usePersistStore()

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Tauri + Vite</h1>
        <h2 className="text-lg font-medium">
          React + Shadcn + Tailwind4 + Zustand
        </h2>
      </div>
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
          <a href="https://tailwindcss.com/" target="_blank">
            <img src="/tailwind.svg" alt="Tailwind logo" />
          </a>
        </Button>
        <Button asChild size="icon" variant="outline" className="p-2">
          <a href="https://zustand.dev/" target="_blank">
            <img src="/zustand.svg" alt="Zustand logo" />
          </a>
        </Button>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Normal Store</CardTitle>
            <CardDescription>
              This store is memory-only.
              <br />
              <br />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Label>Bears: {bears}</Label>
            <Button onClick={addBear} variant="outline">
              Add Bear
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Persist Store</CardTitle>
            <CardDescription>
              This store is persisted to the filesystem.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Label>Fishes: {fishes}</Label>
            <Button onClick={addFish} variant="outline">
              Add Fish
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Immer Store</CardTitle>
            <CardDescription>
              This store is using Immer to manage state.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Label>
              Position: {position.x}, {position.y}
            </Label>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setX(position.x + 1)}>
                Move X
              </Button>
              <Button variant="outline" onClick={() => setY(position.y + 1)}>
                Move Y
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

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

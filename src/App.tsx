import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useBoundStore } from '@/store'
import { useImmerStore } from '@/store/immer/immer-store'
import usePersistStore from '@/store/persist/persist-store'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
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
        <h1 className="font-bold text-2xl">Welcome to Tauri + Vite</h1>
        <h2 className="font-medium text-lg">React + Shadcn + Tailwind4 + Zustand</h2>
      </div>
      <div className="flex gap-2">
        <Button asChild className="p-2" size="icon">
          <a href="https://vitejs.dev" rel="noopener" target="_blank">
            <img alt="Vite logo" height={24} src="/vite.svg" width={24} />
          </a>
        </Button>
        <Button asChild className="p-2" size="icon">
          <a href="https://tauri.app" rel="noopener" target="_blank">
            <img alt="Tauri logo" height={24} src="/tauri.svg" width={24} />
          </a>
        </Button>
        <Button asChild className="p-2" size="icon">
          <a href="https://reactjs.org" rel="noopener" target="_blank">
            <img alt="React logo" height={24} src="/react.svg" width={24} />
          </a>
        </Button>
        <Button asChild className="p-2" size="icon" variant="outline">
          <a href="https://ui.shadcn.com" rel="noopener" target="_blank">
            <img alt="Shadcn logo" height={24} src="/shadcn.svg" width={24} />
          </a>
        </Button>
        <Button asChild className="p-2" size="icon" variant="outline">
          <a href="https://tailwindcss.com/" rel="noopener" target="_blank">
            <img alt="Tailwind logo" height={24} src="/tailwind.svg" width={24} />
          </a>
        </Button>
        <Button asChild className="p-2" size="icon" variant="outline">
          <a href="https://zustand.dev/" rel="noopener" target="_blank">
            <img alt="Zustand logo" height={24} src="/zustand.svg" width={24} />
          </a>
        </Button>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <div className="grid grid-cols-3 gap-4">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Normal Store</CardTitle>
            <CardDescription>This store is memory-only.</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col gap-2">
            <Label>Bears: {bears}</Label>
            <Button onClick={addBear} variant="outline">
              Add Bear
            </Button>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Persist Store</CardTitle>
            <CardDescription>This store is persisted to the filesystem.</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col gap-2">
            <Label>Fishes: {fishes}</Label>
            <Button onClick={addFish} variant="outline">
              Add Fish
            </Button>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Immer Store</CardTitle>
            <CardDescription>This store is using Immer to manage state.</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col gap-2">
            <Label>
              Position: {position.x}, {position.y}
            </Label>
            <div className="flex gap-2">
              <Button onClick={() => setX(position.x + 1)} variant="outline">
                Move X
              </Button>
              <Button onClick={() => setY(position.y + 1)} variant="outline">
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

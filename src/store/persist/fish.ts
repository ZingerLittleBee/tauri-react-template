import type { PersistCreator } from './persist-store'

interface State {
  fishes: number
}

interface Actions {
  addFish: () => void
}

export type FishSlice = State & Actions

export const createFishSlice: PersistCreator<FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 }))
})

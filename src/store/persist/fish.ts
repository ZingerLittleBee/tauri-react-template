import { PersistCreator } from './persist-store'

type State = {
  fishes: number
}

type Actions = {
  addFish: () => void
}

export type FishSlice = State & Actions

export const createFishSlice: PersistCreator<FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 }))
})

import type { Creator } from '.'

interface State {
  bears: number
}

interface Actions {
  addBear: () => void
}

export type BearSlice = State & Actions

export const createBearSlice: Creator<BearSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 }))
})

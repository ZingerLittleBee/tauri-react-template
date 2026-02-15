import type { ImmerCreator } from './immer-store'

interface State {
  position: {
    x: number
    y: number
  }
}

interface Actions {
  setX: (x: number) => void
  setY: (y: number) => void
}

export type PositionSlice = State & Actions

export const createPositionSlice: ImmerCreator<PositionSlice> = (set) => ({
  position: { x: 0, y: 0 },

  setX: (x: number) =>
    set((state) => {
      state.position.x = x
    }),

  setY: (y: number) =>
    set((state) => {
      state.position.y = y
    })
})

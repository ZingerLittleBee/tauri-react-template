import { ImmerCreator } from './immer-store'

type State = {
  position: {
    x: number
    y: number
  }
}

type Actions = {
  setPosition: (x: number, y: number) => void
  setX: (x: number) => void
  setY: (y: number) => void
  moveBy: (deltaX: number, deltaY: number) => void
  reset: () => void
}

export type PositionSlice = State & Actions

export const createPositionSlice: ImmerCreator<PositionSlice> = (set) => ({
  position: { x: 0, y: 0 },

  setPosition: (x: number, y: number) =>
    set((state) => {
      state.position.x = x
      state.position.y = y
    }),

  setX: (x: number) =>
    set((state) => {
      state.position.x = x
    }),

  setY: (y: number) =>
    set((state) => {
      state.position.y = y
    }),

  moveBy: (deltaX: number, deltaY: number) =>
    set((state) => {
      state.position.x += deltaX
      state.position.y += deltaY
    }),

  reset: () =>
    set((state) => {
      state.position.x = 0
      state.position.y = 0
    })
})

import { ImmerCreator } from './immer-store'

type PositionState = { position: { x: number; y: number } }

type PositionActions = {
  setPosition: ({ x, y }: { x: number; y: number }) => void
  setPositionX: (x: number) => void
}

export type PositionSlice = PositionState & PositionActions

export const createPositionSlice: ImmerCreator<PositionSlice> = (set) => ({
  position: { x: 0, y: 0 },
  setPosition: ({ x, y }: { x: number; y: number }) =>
    set((state) => ({ position: { ...state.position, x, y } })),
  setPositionX: (x: number) => {
    set((state) => {
      state.position.x = x
    })
  }
})

import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createPositionSlice, PositionSlice } from './position'

type ImmerStore = PositionSlice

export type ImmerCreator<T extends Partial<ImmerStore>> = StateCreator<
  ImmerStore,
  [['zustand/immer', never], never],
  [],
  T
>

export const useImmerStore = create<ImmerStore>()(
  immer((...a) => ({
    ...createPositionSlice(...a)
  }))
)

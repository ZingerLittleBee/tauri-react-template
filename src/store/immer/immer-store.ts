import { create, StateCreator } from 'zustand'
import { createPositionSlice, PositionSlice } from './position'

type ImmerStore = PositionSlice

export type ImmerCreator<T extends Partial<ImmerStore>> = StateCreator<
  ImmerStore,
  [['zustand/immer', never], never],
  [],
  T
>

export const useImmerStore = create<ImmerStore>()((...a) => ({
  ...createPositionSlice(...a)
}))

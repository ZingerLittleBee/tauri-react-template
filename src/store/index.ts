import { create, StateCreator } from 'zustand'

import { BearSlice, createBearSlice } from './bear'
import { createSelectors } from './selector'

type BoundStore = BearSlice

export type Creator<T extends Partial<BoundStore>> = StateCreator<
  BoundStore,
  [],
  [],
  T
>

export const useBoundStoreBase = create<BoundStore>()((...a) => ({
  ...createBearSlice(...a)
}))

export const useBoundStore = createSelectors(useBoundStoreBase)

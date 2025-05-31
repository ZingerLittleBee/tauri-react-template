import { create, StateCreator } from 'zustand'

import { BearSlice, createBearSlice } from './bear'
import { createFishSlice, FishSlice } from './fish'
import { createSelectors } from './selector'

type BoundStore = FishSlice & BearSlice

export type Creator<T extends Partial<BoundStore>> = StateCreator<
  BoundStore,
  [],
  [],
  T
>

export const useBoundStoreBase = create<BoundStore>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a)
}))

export const useBoundStore = createSelectors(useBoundStoreBase)

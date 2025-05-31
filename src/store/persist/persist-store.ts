import createDeepMerge from '@fastify/deepmerge'
import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createFishSlice, FishSlice } from './fish'
import { tauriStorage } from './tauri-adapter'

const deepMerge = createDeepMerge({ all: true })

export type PersistCreator<T> = StateCreator<
  PersistStore,
  [['zustand/immer', never], ['zustand/persist', PersistStore], never],
  [],
  T
>

export type PersistStore = FishSlice

const usePersistStore = create<PersistStore>()(
  persist(
    immer((...a) => ({
      ...createFishSlice(...a)
    })),
    {
      name: 'persist',
      storage: tauriStorage,
      merge: (persisted, current) =>
        persisted ? (deepMerge(current, persisted) as never) : current
    }
  )
)

export default usePersistStore

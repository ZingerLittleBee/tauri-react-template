import type { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>
  type State = ReturnType<typeof store.getState>
  store.use = {} as { [K in keyof State]: () => State[K] }
  for (const key of Object.keys(store.getState()) as Array<keyof State>) {
    store.use[key] = () => store((state) => state[key])
  }

  return store
}

import { load, type Store } from '@tauri-apps/plugin-store'
import type { PersistStorage, StorageValue } from 'zustand/middleware'

import type { PersistStore } from './persist-store'

export class TauriStorageAdapter implements PersistStorage<PersistStore> {
  private tauriStore: Store | null = null
  private readonly storePath: string

  constructor(storePath = 'persist-store.json') {
    this.storePath = storePath
  }

  async init(): Promise<void> {
    this.tauriStore = await load(this.storePath)
    if (!this.tauriStore) {
      throw new Error('Failed to load store')
    }
  }

  private async getStore(): Promise<Store> {
    if (!this.tauriStore) {
      await this.init()
    }

    if (!this.tauriStore) {
      throw new Error('Store is not initialized')
    }

    return this.tauriStore
  }

  async getItem(name: string): Promise<StorageValue<PersistStore> | null> {
    try {
      const store = await this.getStore()
      const value = await store.get<PersistStore>(name)
      if (value) {
        return { state: value }
      }
    } catch (error) {
      console.error(`Error getting ${name} from store:`, error)
    }
    return null
  }

  async setItem(name: string, value: StorageValue<PersistStore>): Promise<void> {
    try {
      const store = await this.getStore()
      await store.set(name, value.state)
    } catch (error) {
      console.error(`Error setting ${name} in store:`, error)
    }
  }

  async removeItem(name: string): Promise<void> {
    try {
      const store = await this.getStore()
      await store.delete(name)
    } catch (error) {
      console.error(`Error removing ${name} from store:`, error)
    }
  }
}

export const tauriStorage = new TauriStorageAdapter()

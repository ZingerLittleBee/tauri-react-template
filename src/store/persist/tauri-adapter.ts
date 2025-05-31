import { load, Store } from '@tauri-apps/plugin-store'
import { PersistStorage, StorageValue } from 'zustand/middleware'

import { PersistStore } from './persist-store'

export class TauriStorageAdapter implements PersistStorage<PersistStore> {
  private tauriStore: Store | null = null

  constructor(private storePath: string = 'persist-store.json') {}

  async init(): Promise<void> {
    this.tauriStore = await load(this.storePath)
    if (!this.tauriStore) {
      throw new Error('Failed to load store')
    }
  }

  async getItem(name: string): Promise<StorageValue<PersistStore> | null> {
    if (!this.tauriStore) await this.init()

    try {
      const value = await this.tauriStore!.get<PersistStore>(name)
      if (value) {
        return { state: value }
      }
    } catch (error) {
      console.error(`Error getting ${name} from store:`, error)
    }
    return null
  }

  async setItem(
    name: string,
    value: StorageValue<PersistStore>
  ): Promise<void> {
    if (!this.tauriStore) await this.init()

    try {
      await this.tauriStore!.set(name, value.state)
    } catch (error) {
      console.error(`Error setting ${name} in store:`, error)
    }
  }

  async removeItem(name: string): Promise<void> {
    if (!this.tauriStore) await this.init()

    try {
      await this.tauriStore!.delete(name)
    } catch (error) {
      console.error(`Error removing ${name} from store:`, error)
    }
  }
}

export const tauriStorage = new TauriStorageAdapter()

import { Creator } from '.'

type State = {
	bears: number
}

type Actions = {
	addBear: () => void
}

export type BearSlice = State & Actions

export const createBearSlice: Creator<BearSlice> = set => ({
	bears: 0,
	addBear: () => set(state => ({ bears: state.bears + 1 }))
})
